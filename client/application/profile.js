Template.profile.helpers({
	classes: function(){
	    return Classes.find({}, {sort: {submitted: 1}});
	  },
	user: function(){
		return Meteor.user();
	}
});