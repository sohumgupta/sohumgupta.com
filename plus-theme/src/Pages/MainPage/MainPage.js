import * as React from 'react';
import '../../Main.scss';

import experiences from '../../Info/Experience';
import projects from '../../Info/Projects';

import Header from '../../Sections/Header/Header';
import Intro from '../../Sections/Intro/Intro';

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
			<div className="body">
				<Header resize={resize}/>
				<Intro resize={resize}/>
				<div className="scroll-down" style={{width: '100%', height: '10vh', backgroundColor: "black"}}></div>
			</div>
		)
	}
}

export default MainPage;