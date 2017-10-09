import React, {Component} from 'react';

// Help component - represents the help
export default class Help extends Component {
	render() {
		return (
			<div id="help" className="row">
				<div className="col-md-7">
					<h2>How it works?</h2>

					<ul>

						<li>
							<strong>Step 1</strong>
							Register/Login using facebook at the top-right corner button.
						</li>

						<li>
							<strong>Step 2</strong>
							You will be assigned a random prisoner you’ll be dealing with
						</li>

						<li>
							<strong>Step 3</strong>
							At each of the rounds, decide to either betray or remain silently
						</li>

					</ul>
				</div>
			</div>
		);
	}
}
