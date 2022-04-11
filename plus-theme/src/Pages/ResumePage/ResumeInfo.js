import * as React from 'react';

import { MdLanguage, MdPhone, MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export const links = [
	{ label: <MdLanguage/>, text: "sohumgupta.com", navigation: "https://www.sohumgupta.com" },
	{ label: <FaGithub/>, text: "@sohumgupta", navigation: "https://www.github.com/sohumgupta" },
	{ label: <MdPhone/>, text: "(630)397-1796", navigation: "tel:640-397-1796" },
	{ label: <MdEmail/>, text: "sohum_gupta@brown.edu", navigation: "mailto:sohum_gupta@brown.edu" },
]

export const skills = {
	technologies: [
		{label: "Python", navigation: "https://www.python.org/"},
		{label: "JavaScript", navigation: "https://www.javascript.com"},
		{label: "React.js", navigation: "https://reactjs.org/"},
		{label: "Java", navigation: "https://www.java.com/en/"},
		{label: "Express", navigation: "https://expressjs.com/"},
		{label: "Flask", navigation: "https://flask.palletsprojects.com/en/2.0.x/"},
		{label: "C#", navigation: "https://docs.microsoft.com/en-us/dotnet/csharp/"},
	],
	software: [
		{label: "Adobe XD", navigation: "https://www.adobe.com/products/xd.html"},
		{label: "Figma", navigation: "https://www.figma.com/"},
		{label: "Adobe Photoshop", navigation: "https://www.adobe.com/products/photoshop.html"},
		{label: "Adobe Illustrator", navigation: "https://www.adobe.com/products/illustrator.html"},
	]
}

export const courses = [
	"Computational Photography", 
	"Computer Vision", 
	"Deep Learning", 
	"Deep Learning in Genomics", 
	"Theory of Computation", 
	"Intro to Software Engineering", 
	"Data Structures & Algorithms", 
	"Functional Programming", 
	"User Interfaces & Experiences",
	"Intro to Computer Systems", 
	"Intro to Statistics & Probability"
];

export const experiences = [
	{
		organization: "Amazon",
		title: "Software Dev Engineer I Intern",
		dates: "May 2021 - August 2021",
		descriptions: [
			"Developed Flask and Java libraries to reduce integration time for an internal SSO service to existing applications from several days to a few hours.",
			"Implemented a Python library to provide API-style endpoints for protocol-independent bot authentication.",
			"Extended functionality of an existing portal to allow for employees and 3P vendors to debug user authentication by displaying ID token information.",
		]
	},
	{
		organization: "Cress Health",
		title: "Technical Product Manager",
		dates: "January 2021 - August 2020",
		descriptions: [
			// "Implemented several pages in React Native for the Cress iOS app, in use by a healthcare system with 10K+ employees.",
			"Created an admin dashboard tool using React.js, Express, & Azure Cosmos to display and track employee wellness.",
			"Led a team of 6 interns in designing and implementing a brand representative portal using React.js, Express, & Azure Cosmos.",
		]
	},
	// {
	// 	organization: "Vision 13",
	// 	title: "AI Engineer Intern",
	// 	dates: "Jun. 2019 - Aug. 2019",
	// 	descriptions: [
	// 		"Added multi-camera video capture and object detection functionality to internal software using Python, Kivy, & OpenCV, in order to enable virtual image reconstruction.",
	// 		"Helped implement a Q-learning algorithm in Python.",
	// 		"Created and scripted 10+ 3D VR-ready models with C#.",
	// 	]
	// },
]

export const activities = [
	{
		organization: "TEDxBrownU",
		title: "Tech & Web Design Lead",
		dates: "September 2020 - Present",
		descriptions: [
			"Developed a website for TEDxBrownU, the TEDxChapter at Brown University, used to sell 450+ tickets and act as a repository for past and future events.",
			"Managed a mailing list of 500+ emails & oversaw ticketing of multiple events.",
			"Held weekly meetings with a small executive board to plan and execute several virtual salons and conferences with a total of 17 speakers."
		]
	},
	{
		organization: "Functional Programming & Data Structures",
		title: "Head Teaching Assistant",
		dates: "May 2019 - May 2021",
		descriptions: [
			"Worked with the professor and a small team of Head Teaching Assistants to plan course content and develop the course website.",
			"Held weekly lab sections and office hours for classes of 200+ students, and led weekly meetings with a teaching assistant staff of 25+.",
			"Created class notes, handouts, and solutions for projects and labs for a two-semester long introductory course sequence.",
		]
	},
	// {
	// 	organization: "Brown Consulting Club",
	// 	title: "Marketing Committee Member",
	// 	dates: "Feb. 2019 - Dec. 2019",
	// 	descriptions: [
	// 		"Managed club website with 1.2K peak weekly views by updating content, redesigning multiple webpages in Figma, and building them in HTML/CSS.",
	// 		"Increased attendance at club events by 20% by creating graphics for social media and physical marketing campaigns.",
	// 	]
	// },
]

export const projects = [
	{
		title: "Optical Music Recognition",
		description: "A Python program that used Hough Circle Transform, bounding box detection, and a Convolutional Neural Network to produce MIDI files from images of sheet music."
	},
	{
		title: "The Admiral",
		description: "An online multiplayer game made in the Unity engine that combined elements of exploration and social deception, set in a procedurally-generated underwater world created using the Marching Cubes, Perlin Worms, and Boids algorithms."
	}
]