ApplicationController = RouteController.extend({
  layoutTemplate: 'AppLayout',
  
  action: function() {
    console.log('this should be overriddenn...');
  }
});