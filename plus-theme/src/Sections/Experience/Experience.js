import * as React from 'react';
import './Experience.scss';

import experiences from '../../Info/Experience';

class Experience extends React.Component {
	constructor() { 
		super()
		this.state = { open: false }
	}

	renderTags() { return this.props.tags.map((t) => <p className="experience-tag">{t}</p>) }
	renderLinks() { 
		return this.props.links.map((l) => 
		<a className="experience-link" target="_blank" rel="noopener noreferrer" href={l.navigation}>{l.icon}{l.label}</a>
	) }

	render() {
		return (
			<div className={"experience-wrapper" + (this.state.open ? " open" : "")}>
				<div className="experience-header" onClick={() => this.setState({open: !this.state.open})}>
					{this.props.organization}
					<div className={"experience-plus" + (this.state.open ? " expanded" : "")}>
						<div className="plus-vertical"></div>
						<div className="plus-horizontal"></div>
					</div>
				</div>
				<div className="experience-info-wrapper">
					<div className="experience-main">
						<p className="experience-title">{this.props.title}</p>
						<p className="experience-dates">{this.props.dates}</p>
						<div className="experience-tags">{this.renderTags()}</div>
						<div className="experience-links">{this.renderLinks()}</div>
					</div>
					<div className="experience-description">{this.props.description}</div>
				</div>
			</div>
		)
	}
}

class Experiences extends React.Component {
	renderExperiences() {
		return experiences.map((e) => <Experience organization={e.organization} title={e.title} dates={e.dates} description={e.description} tags={e.tags} links={e.links}/>)
	}

	render() {
		const resizeClass = this.props.resize ? " experience-resize" : ""
		return (
			<div className={"experience-section-wrapper" + resizeClass}>
				<div className="experience-section">
					<div className="experience-section-header">
						Experience
					</div>
					<div className="experience-wrapper">
						{this.renderExperiences()}
					</div>
				</div>
			</div>
		)
	}
}

export default Experiences;