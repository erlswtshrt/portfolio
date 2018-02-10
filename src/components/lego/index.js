import React, { Component } from 'react';

class Lego extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<svg
					width="58px"
					height="50px"
					viewBox="0 0 58 50"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs />
					<g
						id="Home"
						stroke="none"
						stroke-width="1"
						fill="none"
						fill-rule="evenodd"
					>
						<g id="lego-pink">
							<g id="Rectangle-2">
								<polygon
									fill={this.props.dark}
									points="29 23 58 12 58 39 29 50"
								/>
								<polygon
									fill={this.props.dark}
									points="0 12 29 1 58 12 29 50"
								/>
								<polygon
									fill={this.props.light}
									points="0 12 29 1 58 12 29 23"
								/>
								<polygon
									fill={this.props.medium}
									points="0 12 29 23 29 50 0 39"
								/>
							</g>
							<g id="Group-3" transform="translate(9, 6)">
								<ellipse
									id="Oval-2"
									fill={this.props.dark}
									cx="5.5"
									cy="5.5"
									rx="5.5"
									ry="2.5"
								/>
								<rect
									id="Rectangle-3"
									fill={this.props.dark}
									x="0"
									y="2.5"
									width="11"
									height="3"
								/>
								<ellipse
									id="Oval-2"
									fill={this.props.medium}
									cx="5.5"
									cy="2.5"
									rx="5.5"
									ry="2.5"
								/>
							</g>
							<g id="Group-3" transform="translate(24, 0)">
								<ellipse
									id="Oval-2"
									fill={this.props.dark}
									cx="5.5"
									cy="5.5"
									rx="5.5"
									ry="2.5"
								/>
								<rect
									id="Rectangle-3"
									fill={this.props.dark}
									x="0"
									y="2.5"
									width="11"
									height="3"
								/>
								<ellipse
									id="Oval-2"
									fill={this.props.medium}
									cx="5.5"
									cy="2.5"
									rx="5.5"
									ry="2.5"
								/>
							</g>
							<g id="Group-3" transform="translate(38, 6)">
								<ellipse
									id="Oval-2"
									fill={this.props.dark}
									cx="5.5"
									cy="5.5"
									rx="5.5"
									ry="2.5"
								/>
								<rect
									id="Rectangle-3"
									fill={this.props.dark}
									x="0"
									y="2.5"
									width="11"
									height="3"
								/>
								<ellipse
									id="Oval-2"
									fill={this.props.medium}
									cx="5.5"
									cy="2.5"
									rx="5.5"
									ry="2.5"
								/>
							</g>
							<g id="Group-3" transform="translate(24, 11)">
								<ellipse
									id="Oval-2"
									fill={this.props.dark}
									cx="5.5"
									cy="5.5"
									rx="5.5"
									ry="2.5"
								/>
								<rect
									id="Rectangle-3"
									fill={this.props.dark}
									x="0"
									y="2.5"
									width="11"
									height="3"
								/>
								<ellipse
									id="Oval-2"
									fill={this.props.medium}
									cx="5.5"
									cy="2.5"
									rx="5.5"
									ry="2.5"
								/>
							</g>
						</g>
					</g>
				</svg>
			</div>
		);
	}
}

export default Lego;
