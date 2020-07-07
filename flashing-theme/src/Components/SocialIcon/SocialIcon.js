import * as React from 'react';
import './SocialIcon.scss';

import { ReactComponent as Circle1 } from '../../Assets/Circles/circle-1.svg'
import { ReactComponent as Circle2 } from '../../Assets/Circles/circle-2.svg'
import { ReactComponent as Circle3 } from '../../Assets/Circles/circle-3.svg'
import { ReactComponent as Circle4 } from '../../Assets/Circles/circle-4.svg'

const circles = [<Circle1/>, <Circle2/>, <Circle3/>, <Circle4/>]

class SocialIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = { circle: <Circle1/> }
	}

	randomizeCircle() {
		var index = Math.floor(Math.random() * circles.length);
  		this.setState({circle: circles[index]})
	}

	openLink() { window.open(this.props.url); }

	render() {
		return (
			<div className="social-icon-wrapper" onMouseEnter={this.randomizeCircle.bind(this)} onClick={() => this.openLink()}>
				{this.props.children}
				<div className="social-icon-circle">{this.state.circle}</div>
			</div>
		)
	}
}

export default SocialIcon;