Router.route('index', {
  path: '/',
  controller: 'IndexController'
});

Router.route('eventSignin', {
  path: '/54c96d4959b8056823926058',
  controller: 'EventSigninController'
})

Router.onBeforeAction(function() {
  Meteor.call('addLog',this.request.url);
  this.next();
})