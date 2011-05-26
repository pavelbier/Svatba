(function() {
  var Mrak, Mraky, mraky;
  Mrak = (function() {
    function Mrak(later) {
      var body;
      if (later == null) {
        later = false;
      }
      this.smer = Math.random() > 0.5 ? -1 : 1;
      this.speed = Math.random() * 5;
      this.velikost_mraku = 1 + Math.round(Math.random() * 2);
      body = $('body');
      this.body_width = body.width();
      this.start_x = later ? 0 : Math.round(Math.random() * this.body_width);
      if (this.start_x === 0 && later) {
        this.start_x = this.body_width;
      }
      this.start_y = Math.round(Math.random() * 550);
      this.objekt = $('<img>', {
        src: '/img/mrak' + this.velikost_mraku + '.png',
        style: 'position: absolute; left : ' + this.start_x + 'px  ; top: ' + this.start_y + 'px; z-index:5'
      });
      this.objekt.appendTo(body);
    }
    Mrak.prototype.kam = function() {
      return alert(this.smer);
    };
    Mrak.prototype.presun = function() {
      this.presun = this.smer === 1 ? '+=' : '-=';
      return this.objekt.animate({
        left: this.presun + (this.body_width + 200)
      }, 50000 * this.speed, function() {
        var mrak, _ref;
        if (typeof this !== "undefined" && this !== null) {
          if ((_ref = this.objekt) != null) {
            _ref.remove();
          }
        }
        mrak = new Mrak(true);
        return mrak.presun();
      });
    };
    return Mrak;
  })();
  Mraky = (function() {
    function Mraky() {
      var i, _ref;
      this.pocet = 7;
      this.mrak = [];
      for (i = 0, _ref = this.pocet; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
        this.mrak[i] = new Mrak;
      }
    }
    Mraky.prototype.move = function() {
      var i, _ref, _results;
      _results = [];
      for (i = 0, _ref = this.pocet; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
        _results.push(this.mrak[i].presun());
      }
      return _results;
    };
    return Mraky;
  })();
  mraky = new Mraky;
  mraky.move();
}).call(this);
