'use strict';

define(
    [
      'components/flight/lib/component'
    ],

    function (defineComponent) {

      return defineComponent(controls);

      function controls() {
        this.defaultAttrs({
          redControlSelector: '#btn-red',
          greenControlSelector: '#btn-green'
        });


        this.red = function () {

          this.trigger('red');
        };

        this.green = function () {
          this.trigger('green');
        };

        this.after('initialize', function () {
          this.on('click', {
            'redControlSelector': this.red,
            'greenControlSelector': this.green
          });
        });
      }
    }
);