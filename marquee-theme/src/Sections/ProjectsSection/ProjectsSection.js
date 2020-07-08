import * as React from 'react';
import './ProjectsSection.scss';

import Project from '../Project/Project';

class ProjectsSection extends React.Component {
	render() {
		const renderedProjects = this.props.projects.map((p) => <Project info={p} resize={this.props.resize}/>);
		return (
			<div className={"projects-wrapper" + (this.props.resize ? " resize" : "") }>
				{renderedProjects}
			</div>
		)
	}
}

export default ProjectsSection;