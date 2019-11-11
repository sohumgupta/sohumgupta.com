import React from 'react';
import './aroma-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import AromaHeader from '../../images/aroma/aromaheader.png';
import MainPage from '../../images/aroma/main-screen.png';
import CityPage from '../../images/aroma/city-screen.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class AromaPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="aroma-page">
					<WorkHeader image={AromaHeader} name="Aroma" descrip="Created for YHack 2019" technologies={["React", "Express", "Node.js", "MongoDB"]}/>
					<div className="content">
						Over the past few years, my friends and I have traveled a bit, with family, friends, or alone, and there's one thing that we all realized: it's extremely hard to find travel recommendations for a city. Sure, you could search up "best attractions in ___" on Google, and try to parse through the first page of results, but then you just end up visiting the same place as every other tourist in the city, and you never get a real sense of what the city is actually like. In actuality, the best travel recommendations we had found were from small, undiscovered travel blogs, written by people who just wanted to share their favorite experiences in a city.
						<br/><br/>
						<mark className="bold">So we decided to create Aroma: a webapp for the modern traveller.</mark> Aroma is a place where young, urban travellers can find and create meaningful experiences in a city, and where people who know their city best can share their recommendations.
						<br/><br/>
						We decided to create Aroma as a MERN app (MongoDB, Express, React, and Node.js), since we wanted to use real, industry-standard frameworks, and wanted to explore how a modern front-end web development project was carried out.
						<div className="picture">
							<img src={MainPage} className="picture-image"/>
							<p className="picture-caption">The landing page, with a short intro, city search, and links to posting articles.</p>
						</div>
						There are two main functionality areas that we implemented: <mark className="bold">article posting functionality for cities, with tags and images, and search functionality for cities, with viewing ability for all posts associated with them.</mark> In order to do this, we had to learn how to launch a server, parse requests, create structures in a database, and also had to understand how to integrate a frontend React app with an Express/MongoDB backend.
						<div className="picture">
							<img src={CityPage} className="picture-image"/>
							<p className="picture-caption">The city screen showed all the posted articles for a given city.</p>
						</div>
						There was lots of functionality that we wanted to implement, including a post favoriting system, an anonymous sorting system based on favorites, tag filter functionality, customizable, user-styled city pages (ala subreddits), extensive search functionality, and a secure user authentication system. However, we were unable to add these functionality areas, due to time constraints.
						<br/><br/>
						Overall, I was proud of this project, since it was the first modern, deployable full-stack web development project that I had helped carry out, and because I learned a lot about how to integrate many different frameworks that I had little to no knowledge about before the hackathon.
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default AromaPage;