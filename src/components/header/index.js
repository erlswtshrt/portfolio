import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { hover: 0 };
	}
	_setHover(index) {
		this.setState({ hover: index });
	}
	render() {
		let inactiveClasses = 'wrapper';
		let activeClasses = 'wrapper highlight-p';

		return (
			<div className="header">
				<h2 className="name-wrapper highlight-y">John Earle</h2>
				<Link className="link" to="/">
					<h3
						onMouseOver={this._setHover.bind(this, 1)}
						onMouseOut={this._setHover.bind(this, 0)}
						className={
							this.state.hover === 1
								? activeClasses
								: inactiveClasses
						}
					>
						Home
					</h3>
				</Link>
				<Link className="link" to="/">
					<h3
						onMouseOver={this._setHover.bind(this, 2)}
						onMouseOut={this._setHover.bind(this, 0)}
						className={
							this.state.hover === 2
								? activeClasses
								: inactiveClasses
						}
					>
						Work
					</h3>
				</Link>
			</div>
		);
	}
}

export default Header;
