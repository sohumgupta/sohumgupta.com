import * as React from 'react';
import './Main.scss';

import LandingSection from './Sections/LandingSection/LandingSection';
import LearnMoreSection from './Sections/LearnMoreSection/LearnMoreSection';
import MarqueeSection from './Sections/MarqueeSection/MarqueeSection';

class Main extends React.Component {
	render() {
		return (
			<div className="body">
				<MarqueeSection/>
				<LandingSection/>
				<LearnMoreSection/>
			</div>
		)
	}
}

export default Main;