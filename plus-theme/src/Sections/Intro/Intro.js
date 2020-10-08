import * as React from 'react';
import './Intro.scss';

import { ReactComponent as PictureOutline } from '../../Assets/PictureOutline.svg';

class Intro extends React.Component {
	render() {
		return (
			<div className="intro-wrapper">
				<div className="intro-text-wrapper">
					<div className="intro-title">Hi, I'm Sohum Gupta :)</div>
					<div className="intro-text">
						Computer Science @ Brown University.
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