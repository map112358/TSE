Router.route('index', {
  path: '/',
  controller: 'IndexController'
});

/*
Router.route('eventSignin', {
  path: '/54c978d1276ac7f9fa6f9cb8',
  controller: 'EventSigninController'
})
*/

Router.onBeforeAction(function() {
  Meteor.call('addLog',this.request.url);
  this.next();
})