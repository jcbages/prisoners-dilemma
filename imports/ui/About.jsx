import React, {Component} from 'react';

// About component - represents the explanation
export default class About extends Component {
	render() {
		return (
			<div id="about" className="row">
				<div className="col-md-7">
					<h2>About the game</h2>

					<p>
						You and your partner have been arrested and imprisioned.
						With lack of evidence to convict both, each of you’ve been
						given the opportunity to betray the other or remain silently.
						Depeding on your choices, the following outcomes can occur&hellip;
					</p>

					<ul>

						<li>
							<span className="bullet bullet-1" />
							A & B betray &mdash;&gt; A & B serves 2 years in prison
						</li>

						<li>
							<span className="bullet bullet-2" />
							A betray, B remains silent &mdash;&gt; A is free, B serves 3 years in prison
						</li>

						<li>
							<span className="bullet bullet-3" />
							A & B remains silent &mdash;&gt; A & B server 1 year in prison
						</li>

					</ul>
				</div>
			</div>
		);
	}
}
