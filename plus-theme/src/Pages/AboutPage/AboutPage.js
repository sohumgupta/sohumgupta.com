import * as React from 'react';
import './AboutPage.scss';

import Header from '../../Sections/Header/Header';
import About from '../../Sections/About/About';
import Footer from '../../Sections/Footer/Footer';

const resizeRatio = 1.333;

class AboutPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			width: window.innerWidth, 
			height: window.innerHeight,
		};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() { this.updateWindowDimensions(); window.addEventListener('resize', this.updateWindowDimensions); }
	componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }
	updateWindowDimensions() { this.setState({ width: window.innerWidth, height: window.innerHeight }); }

	render() {
		const aspectRatio = (this.state.width / this.state.height);
		const resize = (aspectRatio < resizeRatio);

		return (
			<div className="about-page">
				<Header resize={resize} active="About"/>
				<About resize={resize}/>
				<Footer resize={resize}/>
			</div>
		)
	}
}

export default AboutPage;