import React, { Component } from 'react';

import Tile from '../Tile';

class Home extends Component {
	render() {
		return (
			<div className="master">
				<div className="content-container">
					<h1>Dynamic Mobile Token Libraries</h1>
					<h2>The Challenge</h2>
					<p>
						A consistent UI across an application is key to
						usability. Inconsistent UIs are taxing on the user.
						Design tokens are important in delivering consistent
						sizing, color, spacing, and more. Design tokens are used
						throughout the Salesforce Lightning Design System for
						web, but were lacking for mobile. I was tasked with
						developing parallel token, font, and icon libraries for
						iOS, Android, and Windows Phone that would be used both
						internally as well as externally, building on an
						existing, static system.
					</p>
					<h2>The Solution</h2>
					<p>
						Our team would offer three separate token, font, and
						icon libraries: design-system-ios,
						design-system-android, and design-system-windows. All
						libraries are generated from the same source of truth:
						the tokens, fonts, and icons offered in the Lightning
						Design System npm package. In each mobile design system,
						a gulp script generates the appropriate library files
						using nunjunk templates. All icons are converted to an
						icon font. The unicodes are then mapped to the icon type
						and name, so that they can easily be used by developers.
						In iOS, the library can be installed via CocoaPods. The
						library implementation is an extension of UIColor,
						UIImage, and UIFont, as well as constants for sizing,
						spacing and corner radius. This leads to a
						dot-completion syntax.
					</p>
				</div>
			</div>
		);
	}
}

export default Home;
