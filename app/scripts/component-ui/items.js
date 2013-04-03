'use strict';

define(

    [
      'components/flight/lib/component'
    ],

    function (defineComponent) {

      return defineComponent(items);

      function items() {

        this.requestRed = function() {
          console.log('requestRed');
          this.trigger('uiRedRequested', {
            color: 'red'
          });
        };

        this.requestGreen = function() {
          this.trigger('uiGreenRequested', {
            color: 'green'
          });
        };

        this.after('initialize', function () {
          this.on(document, 'red', this.requestRed);
          this.on(document, 'green', this.requestGreen);
          console.log('init');

        });
      }
    }
);