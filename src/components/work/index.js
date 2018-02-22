import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
	render() {
		return (
			<div className="work">
				<div className="width-100p padding-m mango-gradient center flex-row header">
					<h3 className="light-mango-text">
						$ ~/john earle/
						<u className="white-text">work</u>: ls -a ..
					</h3>
					<div className="flex-row">
						<h3 className="white-text margin-l margin-left-xl">
							<Link to="/" className="link">
								./
							</Link>
						</h3>
						<h3 className="white-text margin-l">notWork</h3>
						<h3 className="white-text margin-l">resume</h3>
						<h3 className="white-text margin-l">contact</h3>
					</div>
				</div>
				<div className="width-100p">
					<div className="flex-row flex-wrap center">
						<div className="tile border-top-pink padding-xl">
							<h3 className="moon">Lightning Design System</h3>
							<div className="center padding-xl">
								<p>
									The Salesforce Lighning Design System is an
									industry-leading framework for creating
									enterprise applications.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<a
										href="http://www.lightningdesignsystem.com/"
										className="link light-pink-background button border-radius"
									>
										Go to Project
									</a>
								</div>
							</div>
						</div>
						<div className="tile border-top-yellow padding-xl">
							<h3 className="moon">Theo</h3>
							<div className="center padding-xl">
								<p>
									Theo is a an abstraction for transforming
									and formatting Design Tokens.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<a
										href="https://github.com/salesforce-ux/theo"
										className="link light-yellow-background button border-radius"
									>
										Go to Project
									</a>
								</div>
							</div>
						</div>
						<div className="tile border-top-green padding-xl">
							<h3 className="moon">Salesforce Icons</h3>
							<div className="center padding-xl">
								<p>
									Icons is an NPM package for bringing in
									Salesforce icons, icon font, and icon font
									metadata into your project.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<div className="light-green-background button border-radius">
										Go to Project
									</div>
								</div>
							</div>
						</div>
						<div className="tile border-top-blue padding-xl">
							<h3 className="moon">Express Constraints</h3>
							<div className="center padding-xl">
								<p>
									Native iOS layouts are difficult. Express
									Constraints is a lightweight constraint
									library for Swift and Objective-C that makes
									layingout objects easy and programmatically
									concise.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<Link
										to="/express-constraints"
										className="link blue-background button border-radius"
									>
										Details
									</Link>
								</div>
							</div>
						</div>
						<div className="tile border-top-mango padding-xl">
							<h3 className="moon">Mobile Token Libraries</h3>
							<div className="center padding-xl">
								<p>
									Scripts for producing dynamic token, icon,
									and icon font libraries for iOS, Android,
									and Windows phone.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<div className="light-mango-background button border-radius">
										Details
									</div>
								</div>
							</div>
						</div>
						<div className="tile border-top-green padding-xl">
							<h3 className="moon">Lightning Design System</h3>
							<div className="center padding-xl">
								<p>
									sjkdh sdkjf. sdkjfh sfskjf sdfk
									sdfsdkjfhsdjkfh sdf. kdjfhskjdhf kjsdhf.
									sdkjfh sjkdf{' '}
								</p>
							</div>
						</div>
						<div className="tile border-top-green padding-xl">
							<h3>Lightning Design System</h3>
							<div className="center padding-xl">
								<p>
									sjkdh sdkjf. sdkjfh sfskjf sdfk
									sdfsdkjfhsdjkfh sdf. kdjfhskjdhf kjsdhf.
									sdkjfh sjkdf{' '}
								</p>
							</div>
						</div>
					</div>
					<div>Patents</div>
					<div className="flex-row flex-wrap center">
						<div className="tile border-top-pink padding-xl">
							<h3 className="moon">Lightning Design System</h3>
							<div className="center padding-xl">
								<p>
									The Salesforce Lighning Design System is an
									industry-leading framework for creating
									enterprise applications.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<div className="light-pink-background button border-radius">
										Go to Project
									</div>
								</div>
							</div>
						</div>
						<div className="tile border-top-yellow padding-xl">
							<h3 className="moon">Theo</h3>
							<div className="center padding-xl">
								<p>
									Theo is a an abstraction for transforming
									and formatting Design Tokens.
								</p>
								<div className="width-100p center flex-row padding-xl">
									<div className="light-yellow-background button border-radius">
										Go to Project
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Work;
