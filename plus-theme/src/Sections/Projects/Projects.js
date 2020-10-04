import * as React from 'react';
import './Projects.scss';

import sections from '../../Info/Projects';

class Project extends React.Component {
	constructor() { 
		super()
		this.state = { open: false }
	}

	render() {
		console.log(this.state.open)
		return (
			<div className={"project-wrapper" + (this.state.open ? " open" : "")} onClick={() => this.setState({open: !this.state.open})}>
				<div className="project-header">
					{this.props.title}
					<div className={"project-plus" + (this.state.open ? " expanded" : "")}>
						<div className="plus-vertical"></div>
						<div className="plus-horizontal"></div>
					</div>
				</div>
			</div>
		)
	}
}

class Projects extends React.Component {
	renderProjects(projects) {
		return projects.map((p) => <Project title={p.title}/>)
	}

	renderSections() {
		return sections.map((s) => 
			<div className="projects-section">
				<div className="projects-section-header">
					{s.section}
				</div>
				<div className="projects-wrapper">
					{this.renderProjects(s.projects)}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="projects-section-wrapper">
				{this.renderSections()}
			</div>
		)
	}
}

export default Projects;