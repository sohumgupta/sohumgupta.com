import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../../Main.scss';
import './ProjectPage.scss';

import Technology from '../../Components/Technology/Technology';
import Icon from '../../Components/Icon/Icon';

const resizeRatio = 1.333;
const noMarqueeRatio = 0.75;

class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			width: window.innerWidth, 
			height: window.innerHeight,
		};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() { document.title = "sohum gupta | " + (this.props.tabTitle.toLowerCase()); this.updateWindowDimensions(); window.addEventListener('resize', this.updateWindowDimensions); window.scrollTo(0, 0); }
	componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }
	updateWindowDimensions() { this.setState({ width: window.innerWidth, height: window.innerHeight }); }

	render() {
		const aspectRatio = (this.state.width / this.state.height);
		const resize = (aspectRatio < resizeRatio);
		const noMarquee = (aspectRatio < noMarqueeRatio);

		let background = <></>;
		if (this.props.video) {
			background = (
				<div className="project-video">
					<video autoPlay loop muted>
						<source src={this.props.video} type="video/mp4"/>
					</video>
				</div>
			);
		} else {
			background = (
				<div className="project-image" style={{backgroundImage: 'url(' + this.props.image + ')'}}/>
			);
		}

		return (
			<div className={"project-page" + (resize ? " resize" : "") + (noMarquee ? " no-marquee" : "")}>
				<div className="marquee-wrapper">
					<div className="marquee-line">
						{ Array(5).fill(<p className="marquee-text">{this.props.organization}</p>) }
					</div>
					<div className="marquee-line backwards">
						{ Array(5).fill(<p className="marquee-text upside-down">{this.props.title}</p>) }
					</div>
				</div>
				{background}
				<div className="project-header">
					<div className="project-name">
						<mark className="project-organization">{this.props.organization}</mark>
						<div className="project-separation"></div>
						<mark className="project-title">{this.props.title}</mark>
					</div>
					<div className="project-date">
						<div className="project-date-bullet"/>
						{this.props.date}
						<div className="project-date-bullet"/>
					</div>
					<div className="project-tech-wrapper">
						{this.props.technologies.map((t) => <Technology tech={t}/>)}
					</div>
				</div>
				<div className="project-description">
					<div className="project-text">
						{this.props.children}
					</div>
				</div>
				<div className="project-links">
					<div className="project-links-text">View my project here:</div>
					<div className="project-links-icons" style={{width: (7.5 * this.props.links.length) + 'vh'}}>
						{this.props.links.map((l) => <Icon url={l.url}>{l.icon}</Icon>)}
					</div>
				</div>
			</div>
		)
	}
}

ProjectPage.defaultProps = {
	tabTitle: "Project"
}

export default ProjectPage;