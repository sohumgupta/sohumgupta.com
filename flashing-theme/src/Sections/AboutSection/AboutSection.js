import * as React from 'react';
import './AboutSection.scss';

class AboutSection extends React.Component {
	render() {
		return (
			<div className="header-wrapper" style={marqueeStyle}>
			</div>
		)
	}
}

AboutSection.defaultProps = {
	direction: "vertical"
}

export default AboutSection;