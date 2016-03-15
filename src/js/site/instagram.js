/* global App $ localStorage */

(function() {
  'use strict';
  const ACCESS_TOKEN  = '40563140.5d854a2.bf2dc58a4abc46478f3be8b43bc1e53b';
  const USER_ID       = '40563140';
  const store = localStorage;

  App.plugins.instagram = (new function() {
    this.run = () => {
      let cache = store.getItem('instagram');

      if (cache) {
        cache = JSON.parse(cache);
        let ts = cache.ts/1000;
        let now = new Date().getTime()/1000;

        if (now-ts < 600) {
          this._handleData(cache.data);
          return;
        }
      }

      let url = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/` +
        '?access_token=' + ACCESS_TOKEN +
        '&count=4' +
        '&callback=?';

      $.getJSON(url)
      .done(data => {
        let o = {
          ts: new Date().getTime(),
          data: data
        };
        store.setItem('instagram', JSON.stringify(o));
        this._handleData(data);
      })
      .fail((e) => {
        window.console.error('Error: ', e);
        let t = $('#instagram li');
        t.empty().append('<div class="notify icon error on-dark">Unable to connect to Instagram!</div>');
      });
    };

    this._handleData = d => {
      let t = $('#instagram');
      t.empty();
      d.data.forEach(row => {
        let s = `<li class="col-md-3 col-xs-6">
            <a href="${row.link}" target="ig">
              <span class="overlay top">${row.caption.text}</span>
              <img src="${row.images.low_resolution.url}"
                   width="${row.images.low_resolution.width}"
                   height="${row.images.low_resolution.height}">
              <span class="ig-overlay">
                <i class="fa fa-instagram"></i>
                <span>View on Instagram</span>
              </span>
              <span class="overlay bottom">
                <span class="likes"><i class="fa fa-thumbs-up"></i> ${row.likes.count}</span>
                <span class="comments"><i class="fa fa-comments"></i> ${row.comments.count}</span>
              </span>
            </a>
          </li>`;

        t.append(s);
      });
    };
  }());
}());
