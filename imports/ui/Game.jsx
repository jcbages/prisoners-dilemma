import React, {Component} from 'react';

// Game component - represents the user game
export default class User extends Component {
	render() {
		return (
			<div id="user">
				<div className="row">
					<div className="col-md-7">
						<h2>{this.props.gameMessage}</h2>

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
