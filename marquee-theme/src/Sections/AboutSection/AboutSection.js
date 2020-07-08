import * as React from 'react';
import './AboutSection.scss';

import { ReactComponent as PictureOutline } from '../../Assets/PictureOutline.svg';
import { ReactComponent as Hi } from '../../Assets/AboutHi.svg';

class AboutSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };

		this.isInViewport = this.isInViewport.bind(this);
	}

	componentDidMount() { this.isInViewport(); window.addEventListener('scroll', () => this.isInViewport()); }

	isInViewport(offset = -200) {
		if (!this.picture) return;
		if (this.state.visible) return;
		const top = this.picture.getBoundingClientRect().top;
		const visible = top + offset >= 0 && top - offset <= window.innerHeight;
		this.setState({visible});
	}

	render() {
		const resizedStyle = this.props.resize ? " resized" : ""
		return (
			<div className={"about-wrapper" + resizedStyle}>
				<div ref={(el) => this.picture = el} className={"about-image-wrapper" + (this.state.visible ? " visible" : "")}>	
					<PictureOutline/>
				</div>
				<div className="about-right-wrapper">
					<div className="about-resume">
						<a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Resumé</a>
					</div>
					<div className="about-text-wrapper">
						<p className={"about-text" + (this.state.visible ? " visible" : "")}>
							<span className="about-hi"><Hi/></span> I'm a rising junior at Brown University, on track to graduate in May '22 with a degree in Computer Science (and possibly another one in Architectural Studies?). I'm passionate about UI/UX and  Full-Stack development. On campus, I'm a Head TA for a functional programming class and I'm a full-stack developer for a start-up called Cress. Outside of class, I'm passionate about cooking, film photography, graphic design, fashion, and music. HMU if you want to make some homemade pasta, take some grainy pictures, need a logo, want to go thrifting, or if you're tryna host a listening party for WLR (whenever it drops)!
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutSection;