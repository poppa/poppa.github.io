/*
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.
*/

window.Poppa = {
  mobileBreakPoint: 480
};

Poppa.scrollWin = function(to, speed, return_false, offset) {
  var pos = to;

  if (typeof to !== 'number')
    pos = $(to).offset().top;

  if (typeof offset !== 'number')
    offset = 0;

  pos += offset;

  if (to != NaN) {
    $('html, body').animate({ scrollTop: pos }, speed||1000, null, function() {
      if (typeof return_false === 'function') {
        return return_false();
      }
      if (!return_false && typeof to !== 'number')
        document.location.href = to;
    });
  }
};

Poppa.loadBackgroundImage = function(url, target) {
  var w = $(window).outerWidth(),
  src = '/assets/img/preamble/' + url,
  img = $('<img>');

  console.log('Load bg: ', src);

  img.attr('src', src).on('load', function() {
    $(target).css('background-image', 'url(' + src + ')');
  });
};

(function($) {

  $.fn.dataHref = function() {
    return this.each(function() {
      $(this).on('click', function() {
        document.location.href = $(this).attr('data-href');
      });
    });
  };

  $.fn.initBigPic = function() {
    var w = $(window).outerWidth();
    if (w < Poppa.mobileBreakPoint) {
      return this.each(function() {});
    }

    return this.each(function() {
      var my = $(this),
      h1 = my.find('.text').hide(),
      flay = my.find('.fade-layer').hide();

      Poppa.loadBackgroundImage(my.attr('data-bg'), this);

      setTimeout(function() {
        h1.fadeIn();
        flay.fadeIn();
      }, 200);
    });
  };
}(jQuery));

Poppa.onload = function() {
  $('[data-href]').dataHref();
  $('.preamble').initBigPic();
};

$(function() {
  Poppa.onload();
});

