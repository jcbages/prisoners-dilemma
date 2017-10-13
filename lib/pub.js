import { Matches } from '../api/MatchDB.jsx';

if (Meteor.isServer) {
	Meteor.publish('Matches', () => {
		return Matches.find();
	});
}