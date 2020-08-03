import * as React from 'react';
import '../../Main.scss';
import './ResumePage.scss';

import { links, experiences, skills, courses, activities, projects } from './ResumeInfo';

class ResumePage extends React.Component {

	renderLinks() {
		return links.map((l) => 
			<div className="resume-link">
				<label>{l.label}</label>
				<a href={l.navigation} rel="noopener noreferrer" target="_blank">{l.text}</a>
			</div>
		);
	}

	renderTechnologies() { return skills.technologies.map((s) => <div className="resume-skill resume-technology">{s}</div>); }
	renderSoftware() { return skills.software.map((s) => <div className="resume-skill resume-software">{s}</div>); }

	renderCourses() { return courses.map((c) => <div className="resume-course"><div className="separator"/>{c}</div>); }

	renderExperiences() { 
		return experiences.map((e) => 
			<div className="resume-experience">
				<p className="resume-experience-heading">
					<mark className="bolded">{e.title}</mark> | {e.organization}
				</p>
				<p className="resume-experience-date">{e.dates}</p>
				<div className="resume-experience-descriptions">
					{ e.descriptions.map((d) => <div className="resume-experience-description"><div className="separator"/>{d}</div>) }
				</div>
			</div>
		); 
	}

	renderActivities() { 
		return activities.map((a) => 
			<div className="resume-activity">
				<p className="resume-activity-heading">
					<mark className="bolded">{a.title}</mark> | {a.organization}
				</p>
				<p className="resume-activity-date">{a.dates}</p>
				<div className="resume-activity-descriptions">
					{ a.descriptions.map((d) => <div className="resume-activity-description"><div className="separator"/>{d}</div>) }
				</div>
			</div>
		); 
	}

	renderProjects() { 
		return projects.map((p) => 
			<div className="resume-project">
				<mark className="resume-project-title">{p.title} |</mark> {p.description}
			</div>
		); 
	}
	
	render() {
		return (
			<div className="resume-page">
				<div className="resume-wrapper">
					<div className="resume-header">
						<div className="resume-name">
							Sohum Gupta
						</div>
						<div className="resume-links">
							{this.renderLinks()}
						</div>
					</div>
					<div className="header-separators">
						<div className="separator"/>
						<div className="separator"/>
						<div className="separator"/>
					</div>
					<div className="resume-content">
						<div className="resume-left">
							<div className="resume-section">
								<div className="resume-section-header">Education<div className="separator"/></div>
								<mark className="accented">Brown University '22</mark>
								Sc.B, Computer Science<br/>
								GPA: 3.94/4.00<br/>
								Javascript
							</div>
							<div className="resume-section">
								<div className="resume-section-header">Skills<div className="separator"/></div>
								<div className="resume-skills">
									{this.renderTechnologies()}
									{this.renderSoftware()}
								</div>
							</div>
							<div className="resume-section">
								<div className="resume-section-header">Courses<div className="separator"/>
									{this.renderCourses()}
								</div>
							</div>
						</div>
						<div className="resume-right">
							<div className="resume-section">
								<div className="resume-section-header">Experience<div className="separator"/>
									<div className="resume-experiences">
										{this.renderExperiences()}
									</div>
								</div>
							</div>
							<div className="resume-section">
								<div className="resume-section-header">Activities<div className="separator"/>
									<div className="resume-activities">
										{this.renderActivities()}
									</div>
								</div>
							</div>
							<div className="resume-section">
								<div className="resume-section-header">Projects<div className="separator"/>
									<div className="resume-projects">
										{this.renderProjects()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ResumePage;