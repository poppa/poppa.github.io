/*
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.
*/

window.Poppa = {
  mobileBreakPoint: 480
};

Poppa.isMobile = function() {
  return $(window).outerWidth() <= Poppa.mobileBreakPoint;
};

Poppa.loadAsset = function(asset, callback) {
  var a = null, r = null;
  if (asset.match(/.*\.js/i)) {
    a = document.createElement('script'),
    r = false;
    a.type = 'text/javascript';
    a.async = true;
    a.src = asset;
    if (callback) {
      console.log("loadAsset(", asset, ", ", callback, ")");
      a.onload = a.onreadystatechange = function() {
        console.log('Loaded!');
        if (!r && (!this.readyState || this.readyState == 'complete')) {
          r = true;
          callback();
        }
      };
    }

    var p = document.getElementsByTagName('script')[0];
    p.parentNode.insertBefore(a, p);
    return;
  }
  else if (asset.match(/.*\.css/i)) {
    a = $('<link>').attr({
      rel: 'stylesheet',
      href: asset
    });

    if (callback) a.on('load', callback);
  }

  if (a) {
    $('body').append(a);
  }
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

// $(window).resize(singleResize(function () {
//   console.log ('Fire only once');
// }));
Poppa.singleResize = function(todo) {
  return (function(todo) {
    var res = null;
    return function() {
      if (res) {
        clearInterval(res);
        res = null;
        return;
      }
      else {
        res = setTimeout(function() {}, 100);
        todo();
      }
    }
  })(todo);
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

  $.fn.dataTarget = function() {
    return this.each(function() {
      $(this).on('click', function() {
        $(this).attr('target', $(this).attr('data-target'));
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

  /* Level height of objects. In the parent element add the attribute
   * "data-level-height" with the class of the sub elements to level
   *
   * <div class="row" data-level-height=".box">
   *   <div class="fourcol">
   *     <div class="box">
   *       ...
   *     </div>
   *   </div>
   *   <div class="fourcol last">
   *     <div class="box">
   *       ...
   *     </div>
   *   </div>
   * </div>
   */
  $.fn.levelHeight = function()
  {
    var levelIt = function(container)
    {
      var cls = $(container).attr('data-level-height'),
      imgs = 0, img = null, my = this;

      this.collection = [];
      this.height = 0;

      $(container).find(cls).each(function(i, el) {
        el = $(el);

        if (el.attr('data-no-level-height'))
          return;

        if ((img = el.find('img')).length > 0) {
          img.load(function() { if (--imgs === 0) my.doAll(); });
          imgs++;
          my.collection.push(el[0]);
          return;
        }

        //my.doCalc (el);
        my.collection.push(el[0]);
      });

      if (imgs === 0) {
        setTimeout(function() {
          my.doAll();
        }, 50);
      }
    };

    levelIt.prototype = {
      doAll: function() {
        var my = this;
        this.height = 0;

        $(this.collection).each(function(i, el) {
          my.doCalc($(el));
        });

        this.doStretch();
      },

      doCalc: function(el) {
        el.css('min-height', 0);
        var h = el.height();
        if (h > this.height) this.height = h;
      },

      doStretch: function() {
        if (!Poppa.isMobile())
          $(this.collection).css('min-height', this.height);
        else
          $(this.collection).css('min-height', 'auto');
      },

      reStretch: function () {
        this.doAll();
      }
    };

    if (this.length) {
      return this.each(function(el) {
        var old = $.data(this, 'levelHeight');

        if (old) {
          old.reStretch();
          return;
        }

        $.data(this, 'levelHeight', new levelIt (this));
      });
    }

    return this;
  };

}(jQuery));

Poppa.onload = function(t) {
  if (t && typeof t === 'string')
    t = $(t);

  var _ = function(p) {
    if (t) {
      return t.find(p);
    }

    return $(p);
  };

  _('.flipper').closest('a').hover(
    function() {
      if (this.iv) {
        clearInterval(this.iv);
      }

      var f = $(this).find('.flipper'),
      fw = $(this).find('.fw:first'),
      css = {
        width: fw.outerWidth(),
        height: fw.outerHeight()
      }

      f.parent().addClass('on').css(css);
      f.find('.fw').css(css);
    },
    function() {
      var f = $(this).find('.flipper'),
      my = this;
      f.addClass('out');
      f.parent().removeClass('on');

      my.iv = setTimeout(function() {
        clearInterval(my.iv);
        f.removeClass('out');
        f.parent().css({ width: 'auto', height: 'auto' });
        f.find('.fw').css({ width: 'auto', height: 'auto' });
      }, 600);
    }
  );

  _('[data-level-height]').levelHeight();
  _('[data-target]').dataTarget();
  _('[data-href]').dataHref();
  _('.preamble').initBigPic();
};

$(function() {
  Poppa.onload();

  setTimeout(function() {
    $('.preamble').removeClass('blurred');
  },20);

  var w = $(window),
  header = $('header'),
  footer = $('footer'),
  preamble = $('.preamble'),
  st = 0,
  prevpos = 0,
  scrollTopCheck = function() {
    st = w.scrollTop();

    if (st > 100) {
      footer.addClass('visible');
    }
    else {
      footer.removeClass('visible');
    }

    if (st > prevpos) {
      if (st > 100) {
        header.addClass('hide');
      }
    }
    else if (st < prevpos) {
      header.removeClass('hide');
    }

    if (st > 120) {
      preamble.addClass('blurred');
    }
    else {
      preamble.removeClass('blurred');
    }

    prevpos = st;
  };

  w.on('scroll', scrollTopCheck);

  if ($('[data-level-height]').length) {
    w.on('resize', Poppa.singleResize(function() {
      $('[data-level-height]').levelHeight();
    }));
  }

  $('.goto-start').click(function() {
    Poppa.scrollWin('#real-content', 500, true, -12);
    return false;
  });

  $('#scroll-top').click(function() {
    Poppa.scrollWin(0, 400, true);
    return false;
  });
});

