import * as React from 'react';
import './Intro.scss';

import { ReactComponent as PictureOutline } from '../../Assets/PictureOutline.svg';
import GooCircles from '../../Components/GooCircles/GooCircles';

class Intro extends React.Component {
	render() {
		const resizeClass = this.props.resize ? " intro-resize" : ""
		return (
			<div className={"intro-wrapper" + resizeClass}>
				<div className="intro-goo-wrapper">
					<GooCircles/>
				</div>
				<div className="intro-text-wrapper">
					<div className="intro-title">Hi, I'm Sohum Gupta!</div>
					<div className="intro-text">
						Computer Science @ <a className="intro-link" href="https://www.brown.edu/" target="_blank" rel="noopener noreferrer">Brown University</a>. 
						Incoming @ <a className="intro-link" href="https://developer.amazon.com/blogs" target="_blank" rel="noopener noreferrer">Amazon</a>, 
						previously @ <a className="intro-link" href="https://www.cresshealth.com/" target="_blank" rel="noopener noreferrer">Cress Health</a>. 
					</div>
				</div>
			</div>
		)
	}
}

export default Intro;