import * as React from 'react';
import './Main.scss';

import LandingSection from './Sections/LandingSection/LandingSection';
import LearnMoreSection from './Sections/LearnMoreSection/LearnMoreSection';
import MarqueeSection from './Sections/MarqueeSection/MarqueeSection';
import ContactSection from './Sections/ContactSection/ContactSection';
import AboutSection from './Sections/AboutSection/AboutSection';
import SectionHeader from './Components/SectionHeader/SectionHeader';
import ExperienceSection from './Sections/ExperienceSection/ExperienceSection';
import ProjectsSection from './Sections/ProjectSection/ProjectSection';

import experiences from './Info/Experience';
import projects from './Info/Projects';

const resizeRatio = 1.333;

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			width: window.innerWidth, 
			height: window.innerHeight,
		};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() { this.updateWindowDimensions(); window.addEventListener('resize', this.updateWindowDimensions); }
	componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }
	updateWindowDimensions() { this.setState({ width: window.innerWidth, height: window.innerHeight }); }

	render() {

		const aspectRatio = (this.state.width / this.state.height);
		const resize = (aspectRatio < resizeRatio);
		const scrollTo = resize ? window.innerHeight : (window.innerHeight * .75);

		const renderedExperiences = experiences.map((e) => 
			<ExperienceSection 
				title={e.title} 
				organization={e.organization} 
				dates={e.dates} 
				descriptions={e.descriptions}/>
		);

		const renderedProjects = projects.map((p) => 
			<ProjectsSection title={p.title} 
				organization={p.organization} 
				date={p.date} 
				description={p.description}
				technologies={p.technologies}
				icons={p.icons}/>
		);

		return (
			<div className="body">
				<MarqueeSection resize={resize}/>
				<LandingSection resize={resize}/>
				<LearnMoreSection resize={resize}
					onClick={() => window.scrollTo({top: scrollTo, behavior: 'smooth'})}/>
				<AboutSection resize={resize}/>
				<SectionHeader section="Experience" color="dark"/>
				{renderedExperiences}
				<SectionHeader section="Projects" color="accent"/>
				<ContactSection resize={resize}/>
			</div>
		)
	}
}

export default Main;