import React, {Component} from 'react';

import Header from './Header.jsx';
import About from './About.jsx';
import Help from './Help.jsx';
import User from './User.jsx';
import Game from './Game.jsx';
import Footer from './Footer.jsx';

// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inSession: false,
			inGame: false
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.exitGame = this.exitGame.bind(this);
		this.enterGame = this.enterGame.bind(this);

		this.updateGameMessage = this.updateGameMessage.bind(this);
	}

	getHome() {
		return (
			<div>
				<About />

				<Help />
			</div>
		);
	}

	getUserHome() {
		return (
			<User onEnterGame={this.enterGame} />
		);
	}

	getGame() {
		return (
			<Game gameMessage={this.state.gameMessage} />
		);
	}

	updateGameMessage(msg) {
		this.setState({gameMessage: msg});
	}

	login() {
		this.setState({inSession: true, inGame: false});
	}

	logout() {
		this.setState({inSession: false, inGame: false});
	}

	enterGame() {
		this.setState({inGame: true, round: 1});
		this.updateGameMessage('Please wait while we find a prisoner for you');
	}

	exitGame() {
		this.setState({inGame: false});
	}

	render() {
		let content = this.getHome();
		if (this.state.inSession && !this.state.inGame) {
			content = this.getUserHome();
		} else if (this.state.inSession && this.state.inGame) {
			content = this.getGame();
		}

		let title = null;
		if (this.state.inSession && this.state.inGame) {
			title = `Round ${this.state.round}`;
		}

		return (
			<div id="app" className="container-fluid">
				<Header
					title={title}
					inSession={this.state.inSession}
					inGame={this.state.inGame}
					onLogin={this.login}
					onLogout={this.logout}
					onExitGame={this.exitGame} />

				{content}

				<Footer />

				<img id="bg" src="/img/bg.png" />
			</div>
		);
	}
}
