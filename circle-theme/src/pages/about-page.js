import React from 'react';
import './about-page.scss';

import ExpandCircleButton from '../assets/expand-circle-button.js';
import Circles from '../assets/circles.js';

import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';

import AboutImage from '../images/about/about-image.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class AboutPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="about">
					<Navbar opacity={1} active="about"></Navbar>
					<div className="about-image-wrapper">
						<div className="about-image-center">
							<img src={AboutImage} className="about-image"/>
						</div>
					</div>
					<div className="about-content">
						<p className="about-title-text">Hi, I'm Sohum!</p>
						<p className="about-text">
							<mark className="bold"> I'm currently a Sophomore at Brown University, on track to graduate in May '22 with a degree in Computer Science (and possibly another one in the History of Art & Architecture?).</mark> I'm interested in UI/UX, but I want to gain more experience in Full-Stack development. On campus, I'm a TA for a functional programming class, I'm part of the Brown Consulting Club, and I'm a front-end developer for a start-up called SciSquare.
							<br/><br/>
							Outside of class, I'm passionate about cooking, film photography, graphic design, fashion, and music. HMU if you want to make some homemade pasta, take some grainy pictures, need a logo, want to go thrifting, or if you're tryna host a listening party for WLR (whenever it drops).
						</p>
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default AboutPage;