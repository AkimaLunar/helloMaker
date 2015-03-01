if (Meteor.isClient) {
	Meteor.startup(function(){
		//Smooth Scrolling
		$('a').smoothScroll();
	});
}