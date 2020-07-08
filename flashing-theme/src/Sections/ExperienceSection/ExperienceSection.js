import * as React from 'react';
import './ExperienceSection.scss';


class ExperienceSection extends React.Component {
	render() {
		const descriptions = this.props.descriptions.map((d) => 
			<div className="experience-description"><p className="experience-bullet"/>{d}</div>);

		return (
			<div className="experience-wrapper">
				<div className="experience-border">
					<div className="experience-border-element"></div>
					<div className="experience-border-element"></div>
					<div className="experience-border-element"></div>
				</div>
				<div className="experience-text">
					<div className="experience-header">
						<div className="experience-organization">{this.props.organization}</div>
						<div className="experience-separation"></div>
						<div className="experience-title">{this.props.title}</div>
					</div>
					<div className="experience-dates">
						<p className="experience-bullet"/>
						{this.props.dates}
						<p className="experience-bullet"/>
					</div>
					<div className="experience-descriptions">{descriptions}</div>
				</div>
			</div>
		)
	}
}

ExperienceSection.defaultProps = {
	organization: "Cress",
	title: "Full-Stack Developer",
	dates: "Jan. 2020 - Present",
	descriptions: [
		"I am currently a full-stack developer for a startup called Cress. haha I have worked on mobile and web applications.",
		"I am currently a full-stack developer for a startup  Cress. I have worked on mobile and web applications.",
		"I am currently a full-stack developer for a startup called Cress. I have worked on mobile and web applications.",
	]
}

export default ExperienceSection;