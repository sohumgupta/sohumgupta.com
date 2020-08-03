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
	technologies: ["Javascript", "React.js", "Express", "Node.js", "Java", "Python", "C#", "C", "ReasonML", "OCaml"],
	software: ["Adobe XD", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Microsoft Powerpoint", "Microsoft Excel"]
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
		dates: "Jan. 2020 - Present",
		descriptions: [
			"Implemented the settings, insights, and reports pages for the Cress mobile app using React Native.",
			"Created a user-facing dashboard tool using React.js, Express, & Azure Cosmos DB.",
			"Led a team of 6 interns in designing and implementing an internal portal using React.js, Express, & Azure Cosmos.",
		]
	},
	{
		organization: "Vision 13",
		title: "AI Engineer Intern",
		dates: "Jun. 2019 - Aug. 2019",
		descriptions: [
			"Added simultaneous multi-camera video capture and object detection functionality to internal software using Python, Kivy, &s OpenCV.",
			"Helped implement a Q-learning algorithm in Python.",
			"Created and scripted 10+ 3D VR-ready models with C#.",
		]
	},
]

export const activities = [
	{
		organization: "Functional Programming & Data Structures",
		title: "Teaching Assistant",
		dates: "May 2019 - Present",
		descriptions: [
			"Create handouts and solutions for projects in a two-semester long introductory course sequence.",
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
		title: "Optical Music Recognition",
		description: "A program that produced MIDI files from images of sheet music, made by combining traditional computer vision algorithms with deep learning techniques."
	},
	{
		title: "The Admiral",
		description: "An online multiplayer game that combines classic elements of exploration and racing games with those of social deception games, set in a procedurally-generated underwater world."
	}
]