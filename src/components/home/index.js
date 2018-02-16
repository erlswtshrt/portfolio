import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tile from '../Tile';
import Lego from '../Lego';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastScrollY: 0,
			ticking: false,
			lego1Y: 0,
			lego2Y: 0,
			lego3Y: 0
		};
	}

	_handleScroll() {
		this.setState({ lastScrollY: window.pageYOffset });
		this._requestTick();
	}

	_requestTick() {
		if (!this.state.ticking) {
			window.requestAnimationFrame(this._tick.bind(this));
			this.setState({ ticking: true });
		}
	}

	_tick() {
		this.setState({
			lego1Y: window.pageYOffset <= 332 ? window.pageYOffset : 332,
			lego2Y: window.pageYOffset <= 282 ? window.pageYOffset : 282,
			lego3Y: window.pageYOffset <= 156 ? window.pageYOffset : 156
		});
		this.setState({ ticking: false });
	}

	componentDidMount() {
		window.addEventListener('scroll', this._handleScroll.bind(this), false);
	}

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
					<div
						style={{
							transform: 'translateY(-40px)',
							position: 'sticky',
							zIndex: '2',
							transform:
								'translate3d(' +
								-(0.15 * (332 - this.state.lego1Y)).toFixed(2) +
								'px, ' +
								(this.state.lego1Y / 1.4 - 150).toFixed(2) +
								'px, 0px) rotateZ(' +
								-(0.15 * (332 - this.state.lego1Y)).toFixed(2) +
								'deg)'
						}}
					>
						<Lego dark="#BD354E" light="#FF7992" medium="#E83E5D" />
					</div>
					<div
						style={{
							position: 'sticky',
							zIndex: '1',
							transform:
								'translate3d(' +
								(0.15 * (282 - this.state.lego2Y)).toFixed(2) +
								'px, ' +
								(this.state.lego2Y / 1.8 - 100).toFixed(2) +
								'px, 0px) rotateZ(' +
								(0.15 * (282 - this.state.lego2Y)).toFixed(2) +
								'deg)'
						}}
					>
						<Lego dark="#5E9C18" light="#B8E986" medium="#7ED321" />
					</div>
					<div
						style={{
							transform:
								'translate3d(' +
								-(0.25 * (156 - this.state.lego3Y)).toFixed(2) +
								'px, ' +
								(this.state.lego3Y / 2 - 50).toFixed(2) +
								'px, 0px) rotateZ(' +
								-(0.25 * (156 - this.state.lego3Y)).toFixed(2) +
								'deg)'
						}}
					>
						<Lego dark="#1071BD" light="#51DFFD" medium="#1FB7F8" />
					</div>
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
											borderRadius: '5px 0px 0px 0px'
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
