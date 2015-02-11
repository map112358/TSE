ApplicationController = RouteController.extend({
  layoutTemplate: 'AppLayout',
  
  action: function() {
    console.log('this should be overriddenn...');
  },
  onBeforeAction: function() {
    Meteor.call('addLog',this.request);
    this.next();
  }
});