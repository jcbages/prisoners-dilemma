import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import Header from './Header.jsx';
import About from './About.jsx';
import Help from './Help.jsx';
import User from './User.jsx';
import Game from './Game.jsx';
import Footer from './Footer.jsx';

import {Users} from '../api/UsersDB.jsx'

// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inSession: false,
			inGame: false,
			isConnected: false,
			userId: "-1"
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.exitGame = this.exitGame.bind(this);
		this.enterGame = this.enterGame.bind(this);

		this.updateGameMessage = this.updateGameMessage.bind(this);
	
	
	}
	componentDidMount(){
		//Burned for DB
		//TODO: Remove when OAuth is implemented.
		this.tryAddUser(0, "Juan C");
		this.tryAddUser(1, "Rafael J");
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
			<User onEnterGame={this.enterGame} userId={this.state.userId}/>
		);
	}

	getGame() {
		return (
			<Game
				isConnected={this.state.isConnected}
				gameMessage={this.state.gameMessage}
				footerMessage={this.state.footerMessage}
				years={this.state.years} />
		);
	}

	updateGameMessage(msg) {
		this.setState({gameMessage: msg});
	}

	login(loginUserId) {
		//Burned for DB
		//TODO: Remove when OAuth is implemented.
		if(typeof loginUserId === "undefined"){
			loginUserId = Math.floor(Math.random()*2);

		}
		this.setState({inSession: true, inGame: false, userId: loginUserId});
	}

	logout() {
		this.setState({inSession: false, inGame: false, userId: -1});
	}

	enterGame() {
		this.setState({inGame: true, round: 1, years: 0, isConnected: false});
		this.updateGameMessage('Please wait while we find a prisoner for you');
	}

	exitGame() {
		this.setState({inGame: false});
	}

	tryAddUser (newFacebookId, newUserName){
		Meteor.call('users.tryAddUser',newFacebookId,newUserName);
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
