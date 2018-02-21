import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tile from '../Tile';
import Lego from '../Lego';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="panel green-gradient padding-xl flex-col center">
					<div className="logo output-pink padding-xl">
						<i>JOHN EARLE</i>
					</div>
					<div>
						<div className="margin-left-xl">
							<div>
								<h2 className="input">$ echo "$GREETING"</h2>
							</div>
							<div className="output margin-xl content-wrapper">
								<div className="content">
									<h2>Oh hey there 👋🏻,</h2>
									<h2 className="margin-xl">
										My name is <i>John Earle</i>, and I am a
										UX Engineer working on{' '}
										<i>design systems at Salesforce</i>.
									</h2>
								</div>
							</div>
							<div>
								<h2 className="input">$ cd work/</h2>
								<h2 className="input">$ ls -a</h2>
							</div>
							<div className="flex-row center">
								<h3 className="output margin-l">.</h3>
								<h3 className="output margin-l">..</h3>
								<h3 className="output-pink margin-l">web</h3>
								<h3 className="output-pink margin-l">mobile</h3>
								<h3 className="output-pink margin-l">resume</h3>
							</div>
							<div className="flex-row margin-bottom-xl margin-top-xl">
								<h1 className="input">
									$ ~/<span className="output">
										john earle
									</span>/work:{' '}
									<span className="output">cd</span>
								</h1>
								<input
									className="margin-left-m"
									type="text"
									name="name"
								/>
							</div>
						</div>
					</div>
					<div className="arrow">👇🏻</div>
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
