import * as React from 'react';
import './Technology.scss';

import { ReactComponent as Circle1 } from '../../Assets/Circles/circle-1.svg'
import { ReactComponent as Circle2 } from '../../Assets/Circles/circle-2.svg'
import { ReactComponent as Circle3 } from '../../Assets/Circles/circle-3.svg'
import { ReactComponent as Circle4 } from '../../Assets/Circles/circle-4.svg'

const circles = [<Circle1/>, <Circle2/>, <Circle3/>, <Circle4/>]

class Technology extends React.Component {
	constructor(props) {
		super(props);
		this.state = { circle: <Circle1/>, circleRot: 0 }
	}

	randomizeCircle() {
		var index = Math.floor(Math.random() * circles.length);
		var rot = (Math.random() * 90) - 45;
  		this.setState({circle: circles[index], circleRot: rot})
	}

	render() {
		const lineStyle = { transform: 'rotate(' + this.state.lineRot + 'deg)', transformOrigin: 'center' }
		return (
			<div className="project-tech" onMouseEnter={this.randomizeCircle.bind(this)}>
				<div className="project-tech-text">{this.props.tech}</div>
			</div>
		)
	}
}

export default Technology;