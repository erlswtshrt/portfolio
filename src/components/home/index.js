import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tile from '../Tile';
import Lego from '../Lego';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<h1 className="highlight-y">John Earle</h1>
				<div className="intro-container content-container">
					<div>
						<h2>Oh hey there 👋,</h2>
					</div>
					<div>
						<p className="indent">
							My name is John and I am a{' '}
							<span className="highlight-b">
								UX Engineer
							</span>{' '}
							working on{' '}
							<span className="highlight-b">
								Design Systems at Salesforce
							</span>.
						</p>
					</div>
				</div>
				<div className="lego-stack">
					<Lego
						className="lego-1"
						dark="#BD354E"
						light="#FF7992"
						medium="#E83E5D"
					/>
					<Lego
						className="lego-2"
						dark="#5E9C18"
						light="#B8E986"
						medium="#7ED321"
					/>
					<Lego
						className="lego-3"
						dark="#1071BD"
						light="#51DFFD"
						medium="#1FB7F8"
					/>
					<Lego dark="#C3B728" light="#FBF276" medium="#E7DA35" />
				</div>
				<div className="content-container">
					<div>
						<h2>
							<span className="highlight-p">Projects</span>
						</h2>
						<div
							className="row-container"
							style={{ height: '400px' }}
						>
							<div className="col-container margin-right-s">
								<Link
									className="link tile-wrapper margin-bottom-s"
									to="/token-libraries"
								>
									<Tile
										style={{
											borderRadius: '30px 0px 0px 0px'
										}}
										title="Dynamic Mobile Token Libraries"
									/>
								</Link>
								<Link
									className="link tile-wrapper margin-top-s"
									to="/token-libraries"
								>
									<Tile title="iOS Token Previewer" />
								</Link>
							</div>
							<div className="col-container margin-left-s">
								<Link
									className="link tile-wrapper"
									to="/express-constraints"
								>
									<Tile title="Express Constraints" />
								</Link>
							</div>
						</div>
					</div>
					<div>
						<h2>
							<span className="highlight-y">Patents</span>{' '}
							(Pending 🙏😬)
						</h2>
						<div
							className="row-container"
							style={{ height: '200px' }}
						>
							<Tile
								className="margin-right-s"
								title="Secure Authenticated CRM Keyboard"
							/>
							<Tile
								className="margin-left-s"
								title="Keyboard Forcepress Spacebar Design"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
