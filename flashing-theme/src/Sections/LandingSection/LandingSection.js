import * as React from 'react';
import './LandingSection.scss';

import { ReactComponent as Line1 } from '../../Assets/StrikeThroughs/strike-through-1.svg'
import { ReactComponent as Line2 } from '../../Assets/StrikeThroughs/strike-through-2.svg'
import { ReactComponent as Line3 } from '../../Assets/StrikeThroughs/strike-through-3.svg'
import { ReactComponent as Line4 } from '../../Assets/StrikeThroughs/strike-through-4.svg'
import { ReactComponent as Line5 } from '../../Assets/StrikeThroughs/strike-through-5.svg'
import { ReactComponent as Line6 } from '../../Assets/StrikeThroughs/strike-through-6.svg'

const lines = [<Line1/>, <Line2/>, <Line3/>, <Line4/>, <Line5/>, <Line6/>]

class LandingSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			line1: <Line1/>,
			line2: <Line2/>
		}
	}

	randomizeImages() {
		console.log("hovering!!!")
		var index1 = Math.floor(Math.random() * lines.length);
		var index2 = Math.floor(Math.random() * lines.length);
  		this.setState({line1: lines[index1], line2: lines[index2]})
	}

	render() {
		return (
			<div className="landing-wrapper">
				<div className="landing-text-wrapper" onMouseEnter={this.randomizeImages.bind(this)}>
					<div className="landing-text">
						Sohum Gupta
						<p className="landing-text-strikethrough">{this.state.line1}</p>
					</div>
					<div className="landing-text">
						Sohum Gupta
					</div>
					<div className="landing-text">
						Sohum Gupta
						<p className="landing-text-strikethrough">{this.state.line2}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default LandingSection;