/* global App $ */

(function() {
  'use strict';

  const TOKEN = '7a1785a8e3d036cf2174e4b7e80b6f70b3b1faca';
  const USERNAME = 'poppa';

  App.plugins.github = (new function() {
    let apiUri = 'https://api.github.com';
    let repoPath = `/users/${USERNAME}/repos`;
    let query = `?token=${TOKEN}&auth=oauth&callback=?`;
    let store = localStorage;

    this.run = () => {
      let cache = store.getItem('github');

      if (cache) {
        cache = JSON.parse(cache);
        let ts = cache.ts/1000;
        let now = new Date().getTime()/1000;
        if (now-ts < 60*60*4) { // Four hours
          this._handleData(cache.data);
          return;
        }
        window.console.log('Old Github cache, renew');
      }

      let s = apiUri + repoPath + query + '&sort=updated';

      $.getJSON(s)
      .then((r) => {
        let o = {
          ts: new Date().getTime(),
          data: r
        };

        store.setItem('github', JSON.stringify(o));
        this._handleData(r);
      })
      .fail((err) => {
        window.console.error('Fail: ', err);
      });
    };

    this._handleData = (data) => {
      let t = $('#github');
      t.empty();
      data.data.sort((a, b) => {
        return a.watchers_count < b.watchers_count
          ? 1
          : a.watchers_count === b.watchers_count
            ? 0
            : -1;
      });
      data.data.forEach((row) => {
        let s = `<li class='col-md-4 col-xs-6'>
          <div class='wrapper'>
            <h3><a href='${row.html_url}' target='github'>${row.name}</a></h3>
            <p>${row.description}</p>
            <div class='meta'>`;

        if (row.fork) {
          s += '<i class="item fa fa-code-fork"></i>';
        }

        s += `<span class='item'>${row.language || 'Misc'}</span>`;
        s += `<span class='item'><i class='fa fa-star'></i> ${row.stargazers_count}</span>`;
        s += `<span class='item'><i class='fa fa-eye'></i> ${row.watchers_count}</span>`;

        s += '</div></div></li>';

        t.append(s);
      });
    };
  }());


}());