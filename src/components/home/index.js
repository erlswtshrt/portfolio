import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="offset-container">
					<h1>John Earle</h1>
					<div className="offset-background" />
				</div>
				<div>
					<h3>Oh hey there, 👋</h3>
				</div>
				<div>
					<p>
						My name is John and I am a UX Engineer working on Design
						Systems at Salesforce.
					</p>
				</div>
				<div>
					<h2>Projects</h2>
				</div>
				<hr />
				<div>
					<h2>Patents (Pending 🙏😬)</h2>
				</div>
			</div>
		);
	}
}

export default Home;
