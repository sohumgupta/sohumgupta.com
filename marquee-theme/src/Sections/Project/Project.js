import * as React from 'react';
import './Project.scss';

import Icon from '../../Components/Icon/Icon'

import { ReactComponent as Bracket1 } from '../../Assets/Brackets/bracket-1.svg'
import { ReactComponent as Bracket2 } from '../../Assets/Brackets/bracket-2.svg'
import { ReactComponent as Bracket3 } from '../../Assets/Brackets/bracket-3.svg'
import { ReactComponent as Bracket4 } from '../../Assets/Brackets/bracket-4.svg'

const brackets = [<Bracket1/>, <Bracket2/>, <Bracket3/>, <Bracket4/>]

class ProjectsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bracket1: <Bracket1/>,
			bracket2: <Bracket2/>,
			showProject: false
		}
	}

	randomizeBrackets() {
		const index1 = Math.floor(Math.random() * brackets.length);
		const index2 = Math.floor(Math.random() * brackets.length);
  		this.setState({bracket1: brackets[index1], bracket2: brackets[index2]})
	}

	render() {
		const renderedIcons = this.props.info.icons.map((i) => <Icon url={i.url}>{i.icon}</Icon>);
		const renderedTechnologies = this.props.info.technologies.map((t) => 
		<div className="project-technology"><p>{t}</p></div>);

		const rendered = [
			<div className="project-wrapper" onMouseEnter={this.randomizeBrackets.bind(this)} onClick={() => this.setState({showProject: true})}>
				<div className="project-left-bracket">{this.state.bracket1}</div>
				<div className="project-picture">
					<div className="project-title">
						{this.props.info.title}
					</div>
				</div>
				<div className="project-right-bracket">{this.state.bracket2}</div>
			</div>,
			<div className={"project-popup-wrapper" + (this.props.resize ? " wrapper-resize" : "")}>
				<div className="project-popup">
					<div className="project-popup-header">
						<div className="project-popup-title">{this.props.info.title}</div>
						<div className="project-popup-organization">{this.props.info.organization}</div>
						<div className="project-popup-dates">{this.props.info.dates}</div>
						<div className="project-popup-technologies">{renderedTechnologies}</div>
					</div>
					<div className="project-popup-description">{this.props.info.description}</div>
					<div className="project-popup-icons">{renderedIcons}</div>
				</div>
			</div>
		]

		if (this.state.showProject) { return rendered }
		else { return rendered[0] }
	}
}

export default ProjectsSection;