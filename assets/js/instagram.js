/*!
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.

  Instagram stuff
*/

window.Insta = {};

Insta.onHashChange = function() {
  var h = (document.location.hash || '').replace(/#/,''),
  m = null;

  if (h && (m = h.match(/^insta-(.+)/)))
    Insta.image.view(m[1]);

  if (!h)
    Insta.image.close();
};

Insta.image = (new function() {
  var t, hbar, init, close, my = this;

  init = function() {
    t = $('#img-preview');
    hbar = Handlebars.compile($('#hbar-image').text());
  };

  this.close = function() {
    if (close && close.length)
      close[0].click();
  };

  this.view = function(which) {
    var img, data, content, oldscroll;

    if (!t) init();

    img = $('[data-image-id="' + which + '"]');
    data = JSON.parse(img.attr('data-image'));
    console.log(data);
    content = $(hbar(data));
    oldscroll = $(window).scrollTop();

    close = content.find('[data-close]').on('click', function() {
      close = null;
      t.slideUp('normal',function() {
        Poppa.scrollWin(oldscroll, 500, true);
        document.location.href = '#';
      });

      return false;
    });

    t.empty().append(content).slideDown('normal', function() {
      Poppa.scrollWin(0, 500, true);
      Insta.run(content);
    });
  };

}());

(function($){
  $.fn.instaImage = function() {
    return this.each(function() {
      $(this).addClass('cursor-pointer').on('click', function() {
        document.location.href = '#insta-' + $(this).attr('data-image-id');
      });
    });
  };
}(jQuery));

Insta.run = function(t) {
  var _ = function(e) {
    if (t) return t.find(e);
    return $(e);
  };

  _('[data-image]').instaImage();
};

$(function() {
  console.log("dom ready!");
  Poppa.loadAsset('/assets/js/vendor/handlebars.js', function() {
    console.log("Handlebars loaded...")
    Insta.onHashChange();
    Insta.run();
  });

  $(window).on('hashchange', Insta.onHashChange);
});
