import React, { Component } from 'react';

import CodeBlock from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

class ExpressConstraints extends Component {
	render() {
		let example1 = `
let constraintTopToBottom = NSLayoutConstraint(
    item: view1,
    attribute: .TopY,
    relatedBy: .Equal,
    toItem: view2,
    attribute: .BottomY,
    multiplier: 1.0,
    constant: 0.0
)

let constrainToCenterX = NSLayoutConstraint(
    item: view1,
    attribute: .CenterX,
    relatedBy: .Equal,
    toItem: view2,
    attribute: .CenterX,
    multiplier: 1.0,
    constant: 0.0
)

view.addConstraint(constraintTopToBottom)
view.addConstraint(constrainToCenterX)
		`;

		let example2 = `
let constraintTopToBottom = NSLayoutConstraint(view1.topAnchor.constraintEqualToAnchor(view2.bottomAnchor).active = true
let constrainToCenterX = NSLayoutConstraint(view1.centerXAnchor.constraintEqualToAnchor(view2.centerXAnchor).active = true
		`;

		let example3 = `
view1.constrainBelow(view2, xAlignment: .center)
		`;

		let constrainBelowExample = `
view1.constrainBelow(view2, xAlignment: .left, width: 30, height: 40, xOffset: 20, yOffset: 50)
		`;

		return (
			<div className="master">
				<div className="content-container">
					<h1>Express Constraints</h1>
					<p>
						Express Constraints is a lightweight Swift framework
						aimed a making programmatic, constraint-based layouts
						simple.
					</p>
					<h2>Methodology</h2>
					<p>
						XCode's Storyboard and auto layout create a layer of
						abstraction between the developer and the code, and
						often lead to inconsisent sources of truth for layout
						and flow. For this reason, it is sometimes best to ditch
						Storybook and go about layouts purely programatically.
						Unfortunately, the default NSConstraint API is extremely
						verbose. Express Constraints provides a lightweight
						wrapper around this API in the form of a UIView
						extension.
					</p>
					<p>
						To illustrate the benefit of this framework, we can
						consider three different approaches to constraining a
						view (view1) below another view (view2). The following
						is an implementation using the NSLayoutConstraint API:
					</p>
					<CodeBlock language="swift" style={docco}>
						{example1}
					</CodeBlock>
					<p>
						As you can see, this is extremely verbose and difficult
						to read. Imagine creating these types of constraints
						when layout out all of your UIViews!
					</p>
					<p>
						An NSLayoutAnchor approach shortens this process a bit.
						Here's is the code for an an equivalent NSLayoutAnchor
						implementation:
					</p>
					<CodeBlock language="swift" style={docco}>
						{example2}
					</CodeBlock>
					<p>
						While this is a much more concise approach to layout, it
						is still difficult to read and visualize. More lines of
						code would also need to be added to deal with sizing and
						offset.
					</p>
					<p>
						This final implementation is using the Express
						Constraints framework:
					</p>
					<CodeBlock language="swift" style={docco}>
						{example3}
					</CodeBlock>
					<p>
						The Express Constraints framework is implemented as a
						UIView extension and is therefore applied onto the view
						itself. It's API is short, yet powerful and provides
						easy readibility because it focuses on aligning views
						relative to one another.<br />Constraints are removed
						behind the scenes when updated, so no messy NSConstrain
						maintenance is required.
					</p>
					<h2>API</h2>
					<h3>.constrainBelow</h3>
					<CodeBlock language="swift" style={docco}>
						{constrainBelowExample}
					</CodeBlock>
					<h3>.constrainAbove</h3>
					<CodeBlock language="swift" style={docco}>
						{constrainBelowExample}
					</CodeBlock>
				</div>
			</div>
		);
	}
}

export default ExpressConstraints;
