(function() {
  'use strict';

  window.Behaviors = {};
  Marionette.Behaviors.behaviorsLookup = function() {
    return window.Behaviors;
  };

  var MyView = Marionette.ItemView.extend({
    template: '#initial-view',

    behaviors: {
      Output: {}
    },

    events: {
      'click @ui.callDelegateEvents': 'callDelegateEvents'
    },

    ui: {
      callDelegateEvents: '[data-for=call-delegateEvents]'
    },

    callDelegateEvents: function() {
      this.delegateEvents();
    },
  });

  window.Behaviors.Output = Marionette.Behavior.extend({
    numberOfClicks: 0,

    events: {
      'click @ui.output': 'output'
    },

    ui: {
      output: '[data-for=output]'
    },

    output: function() {
      console.log('You clicked the button ' + this.numberOfClicks + ' times');
      this.numberOfClicks += 1;
    }
  });

  var Application = Marionette.Application.extend({
    regions: {
      content: '[data-region=content]'
    }
  });

  $(document).ready(function() {
    var application = new Application();
    application.content.show(new MyView());
  });
})();
