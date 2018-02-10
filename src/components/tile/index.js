import React, { Component } from 'react';

class Tile extends Component {
	render() {
		return (
			<div className="tile">
				<div className="content">{this.props.title}</div>
			</div>
		);
	}
}

export default Tile;
