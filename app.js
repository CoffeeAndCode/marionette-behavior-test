(function() {
  'use strict';

  window.Behaviors = {};
  Marionette.Behaviors.behaviorsLookup = function() {
    return window.Behaviors;
  };

  var MyView = Marionette.ItemView.extend({
    numberOfClicks: 0,
    template: '#initial-view',

    behaviors: {
      OutputFromBehavior: {}
    },

    events: {
      'click @ui.callDelegateEvents': 'callDelegateEvents',
      'click @ui.output': 'output'
    },

    ui: {
      callDelegateEvents: '[data-for=call-delegateEvents]',
      output: '[data-for=output-from-view]'
    },

    callDelegateEvents: function() {
      this.delegateEvents();
    },

    output: function(event) {
      console.log($(event.currentTarget).text() + ': You clicked this button ' + this.numberOfClicks + ' times');
      this.numberOfClicks += 1;
    }
  });

  window.Behaviors.OutputFromBehavior = Marionette.Behavior.extend({
    numberOfClicks: 0,

    events: {
      'click @ui.output': 'output'
    },

    ui: {
      output: '[data-for=output-from-behavior]'
    },

    output: function(event) {
      console.log($(event.currentTarget).text() + ': You clicked this button ' + this.numberOfClicks + ' times');
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
