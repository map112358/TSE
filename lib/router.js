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

Router.route('ndaSignin', {
  //path: '/54d13d2419570ac30ca9d7e9',
  path: '/test',
  where: 'server'
}).post(function() {
  console.log("==================");
  console.log("====HTTP POST=====");
  console.log(this.request.body.pawprint);
  console.log("==================");
  //Meteor.call('addMember');
  //Meteor.call('addMember',first_name,last_name,pawprint,event_id);
})

Router.onBeforeAction(function() {
  //Meteor.call('addLog',this.request.url);
  this.next();
})