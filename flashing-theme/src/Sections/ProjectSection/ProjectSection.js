import * as React from 'react';
import './ProjectSection.scss';

import Icon from '../../Components/Icon/Icon';

class ProjectsSection extends React.Component {

	render() {
		const renderedIcons = this.props.icons.map((i) => <Icon url={i.url}>{i.icon}</Icon>);
		const renderedTechnologies = this.props.technologies.map((t) => 
			<div className="project-technology"><p>{t}</p></div>);

		return (
			<div className={"project-wrapper" + (this.props.resize ? " resize" : "")}>
				<div className="project-border">
					<div className="project-border-element"></div>
					<div className="project-border-element"></div>
					<div className="project-border-element"></div>
				</div>
				<div className="project-info">
					<div className="project-icons">{renderedIcons}</div>
					<div className="project-image-wrapper">
						<img className="project-image" src={this.props.image || ""}/>
					</div>
					<div className="project-text">
						<div className="project-header">
							<div className="project-organization">{this.props.organization}</div>
							<div className="project-separation"></div>
							<div className="project-title">{this.props.title}</div>
						</div>
						<div className="project-description">{this.props.description}</div>
						<div className="project-technologies">{renderedTechnologies}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectsSection;