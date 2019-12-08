import React from 'react';
import './redesign-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import RedesignHeader from '../../images/redesign/redesignheader.png';
import OriginalWebsite from '../../images/redesign/original-website.png';
import FinalWebsite from '../../images/redesign/final-website.png';
import VisualRedesign from '../../images/redesign/visual-redesign.png';
import Wireframe from '../../images/redesign/wireframes.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class RedesignPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="redesign-page">
					<WorkHeader image={RedesignHeader} name="Collegeboard Redesign" descrip="Created for CSCI 1300, Fall 2019" technologies={["Adobe XD", "HTML/CSS"]}/>
					<div className="content">
						There is one website that every high schooler knows and hates: the CollegeBoard website. From signing up for SAT tests and AP tests to finding information about colleges across the country, the CollegeBoard website is necessary for some of the most important tasks that upperclassmen in high school need to complete. However, every high schooler quickly realizes that there is one flaw with this omnipotent CollegeBoard website: <mark className="bold">it’s badly designed.</mark> I decided to take this into my own hands and tried to redesign it, utilizing wireframes, a visual redesign, and a responsive website.
						<br/><br/>
						For reference, here's what the CollegeBoard website looks like right now:
			
						<div className="picture">
							<img src={OriginalWebsite} className="picture-image"/>
							<p className="picture-caption">The current layout of the CollegeBoard website.</p>
						</div>

						In my quest to fix the CollegeBoard website, I started by creating wireframes for some of the main pages, to see how the website could be made more usable. I decided to wireframe the <mark className="bold">Home Page, SAT Page, SAT Signup Page, and Login Page.</mark>
						
						<div className="picture">
							<img src={Wireframe} className="picture-image"/>
							<p className="picture-caption">One of my wireframes (for the SAT Signup Page).</p>
						</div>
			
						I then decided to make a visual overhaul of the website, creating a mockup of what a finished product of the SAT Signup page could look like. In my visual redesign, the biggest thing I tried to do was to create a visual hierarchy to inform users of the most important parts of the page. To do this, I used a blue accent color – the same blue that the website currently uses – to highlight the actionable tasks on the page (i.e. sign in, sign up for SATs, and see more buttons), and tried to use con-trasting type sizes to make it clear what the purpose of different sections was. I also made the font size bigger than it originally was and tried to increase contrast between text and background elements in order to improve readability.
						
						<div className="picture">
							<img src={VisualRedesign} className="picture-image"/>
							<p className="picture-caption">My visual redesign of the website (created in Adobe XD).</p>
						</div>

						Finally, I used HTML and CSS to create a responsive website design for the SAT signup page (the same page I did the visual redesign for).
						
						<div className="picture">
							<img src={FinalWebsite} className="picture-image"/>
							<p className="picture-caption">My final responsive website design.</p>
						</div>

					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
		
	};
}

export default RedesignPage;