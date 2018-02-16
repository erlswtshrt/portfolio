import React, { Component } from 'react';

class Tile extends Component {
	render() {
		return (
			<div className="tile" style={this.props.style}>
				<div className="content">
					<h4>{this.props.title}</h4>
				</div>
			</div>
		);
	}
}

export default Tile;
