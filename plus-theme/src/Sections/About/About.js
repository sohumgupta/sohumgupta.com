import * as React from 'react';
import './About.scss';

import AboutPicture from '../../Assets/AboutPicture.jpg';

class About extends React.Component {
	render() {
		const resizeClass = this.props.resize ? " about-resize" : ""
		return (
			<div className={"about-wrapper" + resizeClass}>
				<div className="about-inner-wrapper">
					<img className="about-image" alt="Me!" src={AboutPicture}/>
					<div className="about-text-wrapper">
						<div className="about-title">About Me</div>
						<div className="about-text">
							I'm a junior at Brown University, on track to graduate in May '22 with a degree in Computer Science (and possibly another one in Architectural Studies?). I'm passionate about Software Engineering, UI/UX, and Full-Stack development. On campus, I'm a Head TA for a functional programming class and I'm part of the TEDxBrownU team, working on their website. Apart from computer science, I'm passionate about cooking, film photography, graphic design, fashion, and music. HMU if you want to make some homemade pasta, take some grainy pictures, need a logo, want to go thrifting, or if you're tryna host a listening party for WLR (whenever it drops)!
						</div>
					</div>
					<div className="about-borders">
						<div className="about-border left-border"/>
						<div className="about-border right-border"/>
						<div className="about-border top-border"/>
						<div className="about-border bottom-border"/>
					</div>
				</div>
			</div>
		)
	}
}

export default About;