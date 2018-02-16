import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Home from './home';
import TokenLibraries from './tokenLibraries';
import ExpressConstraints from './expressConstraints';

class App extends Component {
	render() {
		return (
			<Router onUpdate={() => window.scrollTo(0, 0)}>
				<div>
					<Route name="home" exact path="/" component={Home} />
					<Route path="/token-libraries" component={TokenLibraries} />
					<Route path="/express-constraints" component={ExpressConstraints} />
				</div>
			</Router>
		);
	}
}

export default App;
