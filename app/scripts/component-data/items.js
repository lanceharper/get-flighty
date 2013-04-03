'use strict';

define(

    [
      'components/flight/lib/component'
    ],

    function(defineComponent) {
      return defineComponent(items);

      function items() {

        this.serveColor = function(ev, data) {
          console.log(data.color);
        };

        this.after("initialize", function() {
          this.on("uiRedRequested", this.serveColor);
          this.on("uiGreenRequested", this.serveColor);
        });
      }
});