import * as React from 'react';
import './Projects.scss';

import sections from '../../Info/Projects';

class Project extends React.Component {
	constructor() { 
		super()
		this.state = { open: false }
	}

	renderTags() { return this.props.tags.map((t) => <p className="project-tag">{t}</p>) }
	renderLinks() { 
		return this.props.links.map((l) => 
		<a className="project-link" target="_blank" rel="noopener noreferrer" href={l.navigation}>{l.icon}{l.label}</a>
	) }

	render() {
		return (
			<div className={"project-wrapper" + (this.state.open ? " open" : "")}>
				<div className="project-header" onClick={() => this.setState({open: !this.state.open})}>
					{this.props.title}
					<div className={"project-plus" + (this.state.open ? " expanded" : "")}>
						<div className="plus-vertical"></div>
						<div className="plus-horizontal"></div>
					</div>
				</div>
				<div className="project-info-wrapper">
					<div className="project-main">
						<p className="project-subtitle">{this.props.subtitle}</p>
						<div className="project-tags">{this.renderTags()}</div>
						<div className="project-links">{this.renderLinks()}</div>
					</div>
					<div className="project-description">{this.props.description}</div>
				</div>
			</div>
		)
	}
}

class Projects extends React.Component {
	renderProjects(projects) {
		return projects.map((p) => <Project title={p.title} subtitle={p.subtitle} description={p.description} tags={p.tags} links={p.links}/>)
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
		const resizeClass = this.props.resize ? " projects-resize" : ""
		return (
			<div className={"projects-section-wrapper" + resizeClass}>
				{this.renderSections()}
			</div>
		)
	}
}

export default Projects;