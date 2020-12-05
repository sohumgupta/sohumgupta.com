import * as React from 'react';
import './Intro.scss';

import { ReactComponent as PictureOutline } from '../../Assets/PictureOutline.svg';

class Intro extends React.Component {
	render() {
		const resizeClass = this.props.resize ? " intro-resize" : ""
		return (
			<div className={"intro-wrapper" + resizeClass}>
				<div className="intro-text-wrapper">
					<div className="intro-title">Hi, I'm Sohum Gupta :)</div>
					<div className="intro-text">
						Computer Science @ Brown University. Incoming @ Amazon, previously @ Cress Health. 
					</div>
				</div>
				<div className="intro-picture">
					<PictureOutline/>
				</div>
			</div>
		)
	}
}

export default Intro;