import * as React from 'react';
import './ProjectsSection.scss';

import Project from '../Project/Project';

class ProjectsSection extends React.Component {
	render() {
		const renderedProjects = this.props.projects.map((p, i) => 
			<Project 
				info={p} 
				index={i}
				resize={this.props.resize}/>
		);
		const heightStyle = {
			height: 'calc(' + Math.ceil(this.props.projects.length / 2) + ' * (35vh + 3vw) + 5vh)'
		}

		return (
			<div 
				className={"projects-wrapper" + (this.props.resize ? " resize" : "") } 
				style={heightStyle}>
				{renderedProjects}
			</div>
		)
	}
}

export default ProjectsSection;