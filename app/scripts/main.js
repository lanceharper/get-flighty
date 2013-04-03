require([
  'jquery',
  'components/flight/lib/compose',
  'components/flight/lib/registry',
  'components/flight/lib/advice',
  'components/flight/lib/logger',
  'components/flight/tools/debug/debug',
  'boot/page'
],

    function ($, compose, registry, advice, withLogging, debug, initialize) {

      console.log('hey');
      debug.enable(true);
      compose.mixin(registry, [advice.withAdvice, withLogging]);
      DEBUG.events.logAll();

      initialize();

    }

);