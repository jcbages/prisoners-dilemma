import React, {Component} from 'react';

// Header component - represents the title
export default class Header extends Component {
	render() {
		return (
			<div id="header" className="row">
				<div className="col-md-2" />
				<div className="col-md-8">
					<h1>The Prisonner's Dilemma</h1>
					<hr/>
				</div>
				<div className="col-md-2">
					<a href="#" id="login">
						<img src="/img/facebook.png" />
					</a>
				</div>
			</div>
		);
	}
}
