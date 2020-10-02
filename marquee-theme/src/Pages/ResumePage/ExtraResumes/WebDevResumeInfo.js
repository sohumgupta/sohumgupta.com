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
		{label: "JavaScript", navigation: "https://www.javascript.com"},
		{label: "TypeScript", navigation: "https://www.typescriptlang.org/"},
		{label: "React.js", navigation: "https://reactjs.org/"},
		{label: "Redux", navigation: "https://redux.js.org/"},
		{label: "Express", navigation: "https://expressjs.com/"},
		{label: "Node.js", navigation: "https://nodejs.org/en/"},
		{label: "Java", navigation: "https://www.java.com/en/"},
		{label: "Scala", navigation: "https://www.scala-lang.org/"},
		{label: "Python", navigation: "https://www.python.org/"},
		{label: "C#", navigation: "https://docs.microsoft.com/en-us/dotnet/csharp/"},
		{label: "C", navigation: "https://devdocs.io/c/"},
		{label: "ReasonML", navigation: "https://reasonml.github.io/"},
		{label: "OCaml", navigation: "https://ocaml.org/"},
	],
	software: [
		{label: "Adobe XD", navigation: "https://www.adobe.com/products/xd.html"},
		{label: "Figma", navigation: "https://www.figma.com/"},
		{label: "Adobe Photoshop", navigation: "https://www.adobe.com/products/photoshop.html"},
		{label: "Adobe Illustrator", navigation: "https://www.adobe.com/products/illustrator.html"},
		{label: "Microsoft Powerpoint", navigation: "https://www.microsoft.com/en-us/microsoft-365/powerpoint"},
		{label: "Microsoft Excel", navigation: "https://www.microsoft.com/en-us/microsoft-365/excel"},
	]
}

export const courses = [
	"Functional Programming", "Computer Vision", 
	"Intro to Software Engineering", "Data Structures & Algorithms", "User Interfaces & Experiences",
	"Intro to Computer Systems", "Intro to Statistics & Probability"
];

export const experiences = [
	{
		organization: "Cress Health",
		title: "Technical Product Manager",
		dates: "Jan. 2020 - Aug. 2020",
		descriptions: [
			"Implemented the settings, insights, and reports pages in React Native for the Cress iOS app, in use by a healthcare system with 10K+ employees.",
			"Created an admin dashboard tool using React.js, Express, & Azure Cosmos to display and track employee wellness.",
			"Led a team of 6 interns in designing and implementing a brand representative portal using React.js, Express, & Azure Cosmos.",
		]
	},
	{
		organization: "SciSquare",
		title: "Vice President of User Experience",
		dates: "Sept. 2019 - Jan. 2020",
		descriptions: [
			"Led a 4-person team of designers and developers in drafting and implementing the front-end for a browser-based lab management platform.",
			"Used React to develop the landing page, user profile, and projects page for the web application.",
		]
	},
]

export const activities = [
	{
		organization: "Functional Programming & Data Structures",
		title: "Teaching Assistant",
		dates: "May 2019 - Present",
		descriptions: [
			"Created handouts and solutions for projects in a two-semester long introductory course sequence.",
			"Held weekly lab sections and office hours for classes of 200+ students, and attended weekly meetings with a teaching assistant staff of 25+.",
			"Graded homeworks and projects in weekly meetings."
		]
	},
	{
		organization: "Brown Consulting Club",
		title: "Marketing Committee Member",
		dates: "Feb. 2019 - Dec. 2019",
		descriptions: [
			"Managed club website with 1.2K peak weekly views by updating content, redesigning multiple webpages in Figma, and building them in HTML/CSS.",
			"Increased attendance at club events by 20% by creating graphics for social media and physical marketing campaigns.",
		]
	},
]

export const projects = [
	{
		title: "Aroma",
		description: "A web app allowing users to post and view blog-style travel recommendations made with React, Express, Node.js, and MongoDB for YHack 2019."
	},
	{
		title: "The Admiral",
		description: "An online multiplayer game combining elements of exploration and social deception, set in a procedurally-generated underwater world created using the Marching Cubes, Perlin Worms, and Boids algorithms."
	}
]