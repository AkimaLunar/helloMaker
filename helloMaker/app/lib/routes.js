Router.configure({
  layoutTemplate: 'MasterLayout',
  //loadingTemplate: 'Loading',
  //notFoundTemplate: 'NotFound',
  waitOn: function() { return Meteor.subscribe('classes'); }
});

// Router.route('/', {
//   name: 'home',
//   controller: 'HomeController',
//   action: 'action',
//   where: 'client'
// });

Router.route('/', function () {
	if (Meteor.user()) {
		this.render('profile');
	} else {
  		this.render('Home');
	}
});

Router.route('/profile', function(){
	this.render("profile");
});