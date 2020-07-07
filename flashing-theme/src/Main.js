import * as React from 'react';
import './Main.scss';

import LandingSection from './Sections/LandingSection/LandingSection';
import LearnMoreSection from './Sections/LearnMoreSection/LearnMoreSection';
import MarqueeSection from './Sections/MarqueeSection/MarqueeSection';
import ContactSection from './Sections/ContactSection/ContactSection';
import AboutSection from './Sections/AboutSection/AboutSection';

class Main extends React.Component {
	render() {
		return (
			<div className="body">
				<MarqueeSection/>
				<LandingSection/>
				<LearnMoreSection/>
				<AboutSection/>
				<div style={{width: '100%', height: '80vh'}}/>
				<ContactSection/>
			</div>
		)
	}
}

export default Main;