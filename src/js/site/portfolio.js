/* global App */

(function() {
  'use strict';

  App.plugins.portfolio = (new function() {
    const buttons = [];
    // let current = null;

    const closeAll = (btn) => {
      buttons.forEach((b) => {
        if (b !== btn && (b.state & button.states.CLOSED) !== b.state) {
          b.clearInterval().close();
        }
      });
    };

    const viewArea = (new function() {
      let va       = null,
        loader     = null,
        cont       = null,
        currentRow = null,
        isOpen     = false,
        animIntval = 600,
        clrs       = [ 'blue', 'cyan', 'magenta', 'purple', 'green', 'orange' ];

      const init = () => {
        va = $('<div>').addClass('viewarea');
        cont = $('<div>').addClass('content');
        loader = $('<div>').addClass('loading').html('<i class="fa fa-spinner fa-spin"></i> Loading...').hide();
        va.append(cont);
      };

      let idcnt = 0;

      this.display = (row, color, href) => {
        let copy = va, isCopy = false;

        if (!row.attr('id')) {
          row.attr('id', '__row' + (idcnt++));
        }

        const rid = row.attr('id');

        if (currentRow && rid !== currentRow) {
          copy = va.clone(true);
          isCopy = true;
        }

        let _cont = copy.find('div.content');

        if (isOpen) {
          _cont.addClass('closing');
        }

        va.addClass('opening');

        // setTimeout(() => {
          va.append(loader);
          loader.fadeIn('fast');
          $.get('portfolio/' + href)
          .then((data) => {
            loader.fadeOut('fast');
            cont.empty().append(data).removeClass('closing').addClass('opening');

            let top = row.offset().top - $('header').height() - 17;
            $('html,body').animate({
              scrollTop: top
            }, 700);

            setTimeout(() => {
              cont.addClass('opened').removeClass('opening');
            }, animIntval);
          })
          .fail((err) => {
            window.console.error('Error: ', err);
            cont.empty().removeClass('closing opening');
          });
        // }, animIntval);

        requestAnimationFrame(() => {
          va.removeClass(clrs.join(' ')).addClass(color||clrs[0]);
        });

        if (isCopy) {
          copy.hide();
          va.removeClass('opened');
          copy.insertAfter(va);
          copy.removeClass('opened').addClass('closing');
          setTimeout(() => {
            copy.removeClass('closing');
          }, animIntval);
        }

        va.insertAfter(row);
        va.addClass('opening');
        setTimeout(() => {
          va.addClass('opened').removeClass('opening');
        }, animIntval);
        currentRow = rid;
        isOpen = true;
      };

      this.close = () => {
        va.addClass('closing').removeClass('opened');
        setTimeout(() => {
          va.removeClass('closing');
        }, animIntval);
        isOpen = false;
        currentRow = null;
      };

      // On DOM ready
      $(() => { init(); });
    }());

    class button {

      constructor(el) {
        this.state  = button.states.CLOSED;
        this._elem  = el;
        this._href  = el.attr('data-portfolio');
        this._clr   = el.attr('data-color') || 'purple';
        this._ivals = {};

        el.on('click', () => { return this._onclick(); });
      }

      open() {
        closeAll(this);
        this.clearInterval();
        this.state = button.states.OPENING;
        this._elem.addClass('opening').removeClass('closing closed opened');

        viewArea.display(this._elem.closest('.flexrow'), this._clr, this._href);

        this._ivals.open = setTimeout(() => {
          this._elem.addClass('opened ' + this._clr).removeClass('opening');
          this.state = button.states.OPENED;
        }, button.animationInterval);

        return this;
      }

      close() {
        this.clearInterval();
        this.state = button.states.CLOSING;
        this._elem.addClass('closing').removeClass('opened opening closed');

        this._ivals.close = setTimeout(() => {
          this.state = button.states.CLOSED;
          this._elem.removeClass('closing');
        }, button.animationInterval);

        return this;
      }

      clearInterval(which) {
        if (which) {
          if (this._ivals[which]) {
            clearTimeout(this._ivals[which]);
          }
          return this;
        }
        if (this._ivals.open) {
          clearTimeout(this._ivals.open);
        }
        if (this._ivals.close) {
          clearTimeout(this._ivals.close);
        }

        return this;
      }

      _onclick() {
        requestAnimationFrame(() => {
          if ((button.states.OPENING|button.states.OPENED) & this.state) {
            this.close();
            viewArea.close();
          }
          else {
            this.open();
          }
        });

        return false;
      }
    }

    button.animationInterval = 600;

    button.states = {
      CLOSED:  1,
      OPENED:  2,
      OPENING: 4,
      CLOSING: 8
    };

    this.run = () => {
      $('[data-portfolio').each((i, el) => {
        el = $(el);
        let b = new button(el);
        buttons.push(b);
      });

    };
  }());

}());