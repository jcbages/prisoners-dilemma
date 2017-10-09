import React, {Component} from 'react';

// Game component - represents the user game
export default class User extends Component {
	getLoading() {
		return (
			<div id="loading">
				<img src="/img/banana.png" />			
			</div>
		);
	}

	getButtons() {
		return (
			<div>
				<button></button>			
			</div>
		);
	}

	render() {
		let content = this.getLoading();
		if (this.props.isConnected) content = this.getButtons();

		return (
			<div id="game">
				<div className="row">
					<div className="col-md-7">
						<h2>{this.props.gameMessage}&hellip;</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-md-7">{content}</div>

					<div className="col-md-5">
							<h3>
								You've <span>{this.props.years} years</span> of
								prison in this match
							</h3>
					</div>
				</div>

				<div className="row">
					<div className="col-md-7">
						<h2>{this.props.footerMessage || ''}</h2>
					</div>
				</div>
			</div>
		);
	}
}
