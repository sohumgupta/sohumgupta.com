import * as React from 'react';
import './ProjectSection.scss';

import Icon from '../../Components/Icon/Icon';

class ProjectsSection extends React.Component {

	render() {
		const renderedIcons = this.props.icons.map((i) => <Icon url={i.url}>{i.icon}</Icon>);
		const renderedTechnologies = this.props.technologies.map((t) => <p className="experience-technology">{t}</p>);

		return (
			<div className="project-wrapper">
				<div className="project-title">{this.props.title}</div>
				<div className="project-description">{this.props.description}</div>
				<div className="project-technologies">{renderedTechnologies}</div>
				<div className="project-icons">{renderedIcons}</div>
			</div>
		)
	}
}

export default ProjectsSection;