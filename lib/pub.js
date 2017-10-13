if (Meteor.isServer) {
	Meteor.publish('Matches', () => {
		return Matches.find();
	});
}