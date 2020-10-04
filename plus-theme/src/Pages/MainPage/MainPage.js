import * as React from 'react';
import './MainPage.scss';

import experiences from '../../Info/Experience';

import Header from '../../Sections/Header/Header';
import About from '../../Sections/About/About';
import Projects from '../../Sections/Projects/Projects';

import { FaChevronDown } from 'react-icons/fa'

const resizeRatio = 1.333;

class MainPage extends React.Component {
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
			<div className="main-page">
				<Header resize={resize} active="Work"/>
				<About resize={resize}/>
				<div className="scroll-down" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
					Learn More <FaChevronDown/>
				</div>
				<Projects resize={resize}/>
			</div>
		)
	}
}

export default MainPage;