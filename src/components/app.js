import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Home from './home';
import TokenLibraries from './tokenLibraries';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route name="home" exact path="/" component={Home} />
					<Route path="/token-libraries" component={TokenLibraries} />
				</div>
			</Router>
		);
	}
}

export default App;
