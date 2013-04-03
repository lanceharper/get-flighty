'use strict';

define(

    [
      'component-data/items',
//      'app/component_data/compose_box',
//      'app/component_data/move_to',
      'component-ui/items',
      'component-ui/controls'
//      'app/component_ui/compose_box',
//      'app/component_ui/folders',
//      'app/component_ui/move_to_selector'
    ],

    function (ItemsData, ItemsUI, ControlsUI) {

      function initialize() {
        console.log('initialized');

        ItemsData.attachTo(document);
        ItemsUI.attachTo(document);
        ControlsUI.attachTo('#controls');
        console.log(ControlsUI);
      }

      return initialize;
    }
);