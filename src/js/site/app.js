/* exports App */

(function() {
  'use strict';
  let App = {
    plugins: {}
  };

  $(() => {
    Object.keys(App.plugins).forEach(p => {
      App.plugins[p].run();
    });
  });

  let win = $(window);
  let scrollState = 0;
  let checkScroll = () => {
    let st = win.scrollTop();

    if (st > 100) {
      if (scrollState === 2) {
        return;
      }

      scrollState = 2;
      $('header').addClass('scrolled');
    }
    else {
      if (scrollState === 1) {
        return;
      }

      scrollState = 1;
      $('header').removeClass('scrolled');
    }
  };

  win.on('scroll', checkScroll);

  window.App = App;

}());