import * as React from 'react';
import './Intro.scss';

import { Link } from 'react-router-dom';

class Intro extends React.Component {
	render() {
		return (
			<div className="intro-wrapper">
				<div className="intro-text-wrapper">
					<div className="intro-text">sohum gupta</div>

					<div className="intro-border left-border"/>
					<div className="intro-border right-border"/>
					<div className="intro-border top-border"/>
					<div className="intro-border bottom-border"/>
				</div>
			</div>
		)
	}
}

export default Intro;