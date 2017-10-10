import React, {Component} from 'react';
import {Users} from '../api/UsersDB.jsx'
import { createContainer } from 'meteor/react-meteor-data';
// User component - represents the user home
class User extends Component {
	render() {
		let stats;
		if(this.props.player.totalGames === 0){
			stats = (
				<div className="row">
					<div className="col-md-7">
						<h3> You have played no games :c</h3>
					</div>
				</div>
			);
		} else {
			stats = (
				<div className="row">
					<div className="col-md-7">
						<h3> You have played {this.props.player.totalGames} games.</h3>
						<h3> You have spent on average {parseFloat(this.props.player.totalYears/this.props.player.totalGames).toFixed(2)} years in jail.</h3>
						<h3> Your best run had you spending {this.props.player.bestGameYears} years in jail.</h3>
					</div>
				</div>
			);
		}
		return (
			<div id="user">
				<div className="row">
					<div className="col-md-7">
						<h2>Hello again {this.props.player.userName}, take a look at your stats&hellip;</h2>
					</div>
				</div>

				{stats}

				<div className="row">
						<div className="col-md-1" />

						<div className="col-md-3">
							<button onClick={this.props.onEnterGame}>
								Let's play!
							</button>
						</div>
				</div>
			</div>
		);
	}
}
export default createContainer (props => {
	Meteor.subscribe('internalUsers');
	return {
		player: Users.findOne({facebookId: props.userId})
	}
}, User);
