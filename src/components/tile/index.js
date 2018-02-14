import React, { Component } from 'react';

class Tile extends Component {
	render() {
		return (
			<div className="tile" style={this.props.style}>
				<div className="content">
					<h2>{this.props.title}</h2>
				</div>
			</div>
		);
	}
}

export default Tile;
