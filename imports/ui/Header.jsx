import React, {Component} from 'react';

// Header component - represents the title
export default class Header extends Component {
	getLeftButton() {
		if (!this.props.inGame) return null;

		return (
			<a href="#" className="header-link" id="exit" onClick={this.props.onExitGame}>
				Exit
			</a>
		);
	}

	getRightButton() {
		if (!this.props.inSession) {
			return (
				<a href="#" id="login" onClick={this.props.onLogin}>
					<img src="/img/facebook.png" />
				</a>
			);
		} else {
			return (
				<a href="#" className="header-link" id="logout" onClick={this.props.onLogout}>
					Logout
				</a>
			)
		}
	}

	render() {
		let leftButton = this.getLeftButton();
		let rightButton = this.getRightButton();

		let title = 'The Prisonner\'s Dilemma';
		if (this.props.title) title = this.props.title;

		return (
			<div id="header" className="row">
				<div className="col-md-2">
					{leftButton}
				</div>

				<div className="col-md-8">
					<h1>{title}</h1>
					<hr/>
				</div>

				<div className="col-md-2">
					{rightButton}
				</div>
			</div>
		);
	}
}
