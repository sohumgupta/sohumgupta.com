import * as React from 'react';
import './Project.scss';

import Icon from '../../Components/Icon/Icon'

import { MdClose } from 'react-icons/md'

class ProjectsSection extends React.Component {
	render() {
		const imageStyle = { backgroundImage: 'url(' + this.props.info.image + ')'}
		const renderedIcons = this.props.info.icons.map((i) => <Icon url={i.url}>{i.icon}</Icon>);
		const renderedTechnologies = this.props.info.technologies.map((t) => 
			<div className="project-technology"><p>{t}</p></div>);

		const topStyle = {
			top: 'calc(' + Math.floor(this.props.index / 2) + ' * (35vh + 3vw))'
		}

		return (
			<div className="project-wrapper" style={topStyle}>
				<div className="project-picture" style={imageStyle}>
					<div className="project-title">
						{this.props.info.title}
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectsSection;