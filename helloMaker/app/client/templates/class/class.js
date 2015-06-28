Template.class.helpers({
	date: function(){
		var time = this.time;
		return moment(time).calendar();
	}
});