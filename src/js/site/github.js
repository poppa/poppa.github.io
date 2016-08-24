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
    let sortOrder = [ 'Pike-Modules', 'jsvault', 'Roxen-Application-Launcher',
                      'php-lime-pro', 'java-lime-pro', 'csharp-lime-pro',
                      'pike-for-sublime' ];
    let cutAt = 9;

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

      let tmp = [],
        name = undefined,
        obj = undefined,
        i = 0, j = 0, x = undefined;

      for (; i < sortOrder.length; i++) {
        name = sortOrder[i];

        for (j = 0; j < data.data.length; j++) {
          obj = data.data[j];
          if (obj.name === name) {
            x = data.data.splice(j, 1);
            tmp.push(x[0]);
            break;
          }
        }
      }

      data.data = tmp.concat(data.data);

      let cnt = 0, cls = '';
      data.data.forEach((row) => {
        if (cnt >= cutAt) {
          cls = ' hidden';
        }
        let s = `<li class='col-md-4 col-xs-6${cls}'>
          <div class='wrapper'>
            <h3>${row.name}</h3>
            <p>${row.description}</p>
            <div class='meta'>`;

        if (row.fork) {
          s += '<i class="item fa fa-code-fork"></i>';
        }

        s += `<span class='item'>${row.language || 'Misc'}</span>`;
        s += `<span class='item'><i class='fa fa-star'></i> ${row.stargazers_count}</span>`;
        s += `<span class='item'><i class='fa fa-eye'></i> ${row.watchers_count}</span>`;
        s += `<a href='${row.html_url}' class='item' target='github'><i class='fa fa-github'></i> View on Github</a>`;

        s += '</div></div></li>';

        t.append(s);

        cnt += 1;
      });

      let more = $('<button class="more">Show more</button>');
      more.insertAfter(t);

      more.on('click', function() {
        t.find('li.hidden').addClass('transition').removeClass('hidden');
        window.requestAnimationFrame(() => {
          t.find('li.transition').removeClass('transition');
        });
        $(this).fadeOut('fast', function() {
          $(this).remove();
        });
      });
    };
  }());


}());