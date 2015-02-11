EventSigninController = ApplicationController.extend({
  layoutTemplate: 'SigninLayout',
  
  action: function() {
    this.render('eventSignin');
  }
});