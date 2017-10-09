import React, {Component} from 'react';

// User component - represents the user home
export default class User extends Component {
	render() {
		return (
			<div id="user">
				<div className="row">
					<div className="col-md-7">
						<h2>Hello again Juan, take a look at your stats&hellip;</h2>

					</div>
				</div>

				<div className="row">
				</div>

				<div className="row">
						<div className="col-md-1" />

						<div className="col-md-3">
							<button onClick={this.props.onEnterGame}>
								Let's play again!
							</button>
						</div>
				</div>
			</div>
		);
	}
}
