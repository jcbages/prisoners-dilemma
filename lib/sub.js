if (Meteor.isClient) {
	Meteor.subscribe('Matches');
	Meteor.subscribe('Users');
}
