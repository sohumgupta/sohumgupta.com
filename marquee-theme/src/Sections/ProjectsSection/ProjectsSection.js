import * as React from 'react';
import './ProjectsSection.scss';

import { Link } from 'react-router-dom';

import Projects from '../../Info/Projects';

class ProjectThumbnail extends React.Component {
	render() {
		return (
			<div className="project-thumbnail-wrapper">
				<Link to={this.props.route}>
					<div className="project-thumbnail" style={{backgroundImage: "url(" + this.props.image + ")"}}>
						<div className="project-title">{this.props.title}</div>
					</div>
				</Link>
			</div>
		)
	}
}

class ProjectsSection extends React.Component {
	render() {
		const projects = Projects.map((p) => <ProjectThumbnail title={p.title} image={p.image} route={p.navigation}/>)
		return (
			<div className={"projects-section-wrapper" + (this.props.resize ? " resize" : "")}>
				<div className="projects-wrapper">
					{projects}
				</div>
			</div>
		)
	}
}

export default ProjectsSection;