import * as React from 'react';

import './ProjectPageMain.scss';

import ProjectPage from '../ProjectPage/ProjectPage';

import AromaPicture from '../../Assets/ProjectPictures/Aroma/AromaPicture.png';

import MainPage from '../../Assets/ProjectPictures/Aroma/MainScreen.png';
import CityPage from '../../Assets/ProjectPictures/Aroma/CityScreen.png';

import { FaGithub } from 'react-icons/fa';

class AromaPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="YHack 2019"
				title="Aroma"
				date="May 2020"
				image={AromaPicture}
				links={[{ icon: <FaGithub/>, url: ""}]}
				technologies={["React", "Express", "Node.js", "MongoDB"]}
			>
				<p className="project-page-text">Over the past few years, my friends and I have traveled a bit, with family, friends, or alone, and there's one thing that we all realized: it's extremely hard to find travel recommendations for a city. Sure, you could search up "best attractions in ___" on Google, and try to parse through the first page of results, but then you just end up visiting the same place as every other tourist in the city, and you never get a real sense of what the city is actually like. In actuality, the best travel recommendations we had found were from small, undiscovered travel blogs, written by people who just wanted to share their favorite experiences in a city.</p>
				<p className="project-page-text">So we decided to create Aroma: a webapp for the modern traveller. Aroma is a place where young, urban travellers can find and create meaningful experiences in a city, and where people who know their city best can share their recommendations.</p>
				<p className="project-page-text">We decided to create Aroma as a MERN app (MongoDB, Express, React, and Node.js), since we wanted to use real, industry-standard frameworks, and wanted to explore how a modern web development project was carried out.</p>
				<div className="project-page-picture">
					<img src={MainPage} className="project-page-image"/>
					<div className="project-page-caption"><p>The landing page, with a short intro, city search, and links to posting articles.</p></div>
				</div>
				<p className="project-page-text">There are two main functionality areas that we implemented: article posting functionality for cities, with tags and images, and search functionality for cities, with viewing ability for all posts associated with them.In order to do this, we had to learn how to launch a server, parse requests, create structures in a database, and also had to understand how to integrate a frontend React app with an Express/MongoDB backend.</p>
				<div className="project-page-picture">
					<img src={CityPage} className="project-page-image"/>
					<div className="project-page-caption"><p>The city screen showed all the posted articles for a given city.</p></div>
				</div>
				<p className="project-page-text">There was lots of functionality that we wanted to implement, including a post favoriting system, an anonymous sorting system based on favorites, tag filter functionality, customizable, user-styled city pages (similar to subreddits), extensive search functionality, and a secure user authentication system. However, we were unable to add these functionality areas, due to time constraints.</p>
				<p className="project-page-text">Overall, I was proud of this project, since it was the first modern, deployable full-stack web development project that I had helped carry out, and because I learned a lot about how to integrate many different frameworks that I had little to no knowledge about before the hackathon.</p>
			</ProjectPage>
		)
	}
}

export default AromaPage;