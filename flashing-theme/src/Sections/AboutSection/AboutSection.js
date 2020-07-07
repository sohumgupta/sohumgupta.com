import * as React from 'react';
import './AboutSection.scss';

import { ReactComponent as PictureOutline } from '../../Assets/PictureOutline.svg';

const resizeRatio = 1.333;

class AboutSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			width: window.innerWidth, 
			height: window.innerHeight,
			visible: false
		};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.isInViewport = this.isInViewport.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		window.addEventListener('scroll', () => this.isInViewport());
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		window.addEventListener('scroll', () => this.isInViewport());
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	isInViewport(offset = -200) {
		if (!this.picture) return;
		if (this.state.visible) return;
		const top = this.picture.getBoundingClientRect().top;
		const visible = top + offset >= 0 && top - offset <= window.innerHeight;
		this.setState({visible});
	}

	render() {
		const aspectRatio = (this.state.width / this.state.height);
		let resizedStyle = aspectRatio < resizeRatio ? " resized" : "";

		return (
			<div className={"about-wrapper" + resizedStyle}>
				<div ref={(el) => this.picture = el} className={"about-image-wrapper" + (this.state.visible ? " visible" : "")}>	
					<PictureOutline/>
				</div>
				<div className="about-text-wrapper">
					<div className="about-text">
						<span className="about-drop-cap">HI.</span> I'm a rising junior at Brown University, on track to graduate in May '22 with a degree in Computer Science (and possibly another one in Architectural Studies?). I'm passionate about UI/UX and  Full-Stack development. On campus, I'm a Head TA for a functional programming class and I'm a full-stack developer for a start-up called Cress. Outside of class, I'm passionate about cooking, film photography, graphic design, fashion, and music. HMU if you want to make some homemade pasta, take some grainy pictures, need a logo, want to go thrifting, or if you're tryna host a listening party for WLR (whenever it drops)!
					</div>
				</div>
			</div>
		)
	}
}

export default AboutSection;