Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('classes'); }
});

Router.route('/', function () {
	//var isLoggedIn = Session.get('isLoggedIn');
	if (Meteor.user()) {
		this.render('profile');
	} else {
  		this.render('Home');
	}
});

Router.route('/profile', function(){
	this.render("profile");
});
   