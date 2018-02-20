import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tile from '../Tile';
import Lego from '../Lego';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="panel green-gradient padding-xl">
					<div className="flex margin-bottom-xl">
						<h1 className="input">
							$ ~/<span className="output">john earle</span>/
						</h1>
						<div className="cursor" />
					</div>
					<div className="margin-left-xl">
						<div>
							<h2 className="input">$ echo "$GREETING"</h2>
						</div>
						<div className="output margin-xl">
							<h2>Oh hey there 👋🏻,</h2>
							<h3 className="margin-m">
								My name is John Earle, and I am a UX Engineer
								working on design systems at Salesforce.
							</h3>
						</div>
						<div>
							<h2 className="input">$ ls -a</h2>
						</div>
						<div>
							<h2 className="input">$ cd work/</h2>
							<h2 className="input">$ cd web/</h2>
						</div>
					</div>
				</div>
				<div className="panel padding-xl">
					<div>
						<h2 className="text-pink">Web</h2>
						<div className="margin-xl">
							<h3>Salesforce Lightning Design System</h3>
							<div>
								<p />
							</div>
						</div>
					</div>
				</div>
				<div className="panel green-gradient padding-xl">
					<div className="margin-left-xl">
						<div>
							<h2 className="input">$ cd ..</h2>
							<h2 className="input">$ cd mobile/</h2>
						</div>
					</div>
				</div>
				<div className="panel padding-xl">
					<div>
						<h2 className="text-blue">Mobile</h2>
						<div />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
