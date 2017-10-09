import React, {Component} from 'react';

import Header from './Header.jsx';
import About from './About.jsx';
import Help from './Help.jsx';
import Footer from './Footer.jsx';

// App component - represents the whole app
export default class App extends Component {
	render() {
		return (
			<div id="app" className="container-fluid">
				<Header />

				<About />

				<Help />

				<Footer />

				<img id="bg" src="/img/bg.png" />
			</div>
		);
	}
}