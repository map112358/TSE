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
  path: '/54d1430c64d4f4a5444cdab0',
  where: 'server'
}).post(function() {
  var pawprint = this.request.body.pawprint;
  
  this.response.setHeader('Access-Control-Allow-Origin','*');
  this.response.write('success');
  this.response.end();
  
  Meteor.call('addMember',"","",pawprint,"54d1430c64d4f4a5444cdab0");
})

Router.onBeforeAction(function() {
  if(this.ready()) {
    //Meteor.call('addLog',this.request);
    this.next();
  }
})