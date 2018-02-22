import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Home from './home';
import Work from './work';
import ExpressConstraints from './expressConstraints';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route name="home" exact path="/" component={Home} />
					<Route name="work" exact path="/work" component={Work} />
					<Route
						name="expressConstraints"
						exact
						path="/express-constraints"
						component={ExpressConstraints}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
