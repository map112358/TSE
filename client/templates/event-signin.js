Template.eventSignin.events({
  'submit #member-signin': function(event) {
    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var pawprint = event.target.pawprint.value;
    var event_id = Router.routes.eventSignin.path().replace(/\//,'');
    Meteor.call('addMember',first_name,last_name,pawprint,event_id);
    
    Router.go('index');
    
    return false;
  }
})