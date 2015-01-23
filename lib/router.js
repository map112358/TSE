Router.route('index', {
  path: '/',
  controller: 'IndexController'
});

Router.onBeforeAction(function() {
  Meteor.call('addLog',this.request.url);
  this.next();
})