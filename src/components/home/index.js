import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	componentDidMount() {
		this.console.focus();
	}

	render() {
		return (
			<div className="home">
				<div
					className="width-100p padding-xl center flex-row header"
					style={{ marginTop: '3rem' }}
				>
					<h2 className="light-primary-text">
						$ ~/<span className="white-text">john earle</span>:
					</h2>
					<input
						className="margin-left-m"
						type="text"
						ref={input => {
							this.console = input;
						}}
						placeholder="cd ..."
					/>
				</div>
				<div className="panel primary-gradient padding-xl flex-col center">
					<div>
						<div className="margin-left-xl">
							<div>
								<h3 className="light-primary-text">
									$ echo "$GREETING"
								</h3>
							</div>
							<div className="output margin-xl content-wrapper">
								<div className="content">
									<h2>Oh hey there 👋🏻,</h2>
									<h2 className="margin-xl">
										My name is{' '}
										<i className="light-pink-text">
											John Earle
										</i>, and I am a UX Engineer working on{' '}
										<i className="light-pink-text">
											design systems at Salesforce
										</i>.
									</h2>
								</div>
							</div>
							<div>
								<h3 className="light-primary-text">$ ls -a</h3>
							</div>
							<div className="flex-row margin-left-l margin-bottom-xl">
								<h3 className="light-primary-text margin-l">
									./
								</h3>
								<h3 className="light-primary-text margin-l">
									../
								</h3>
								<h3 className="white-text margin-l">
									<Link className="link" to="/work">
										./work
									</Link>
								</h3>
								<h3 className="white-text margin-l">
									./notWork
								</h3>
								<h3 className="white-text margin-l">
									./resume
								</h3>
								<h3 className="white-text margin-l">
									./contact
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
