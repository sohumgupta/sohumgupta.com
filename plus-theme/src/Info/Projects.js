import * as React from 'react';

// import Admiral from '../Assets/ProjectPictures/Admiral/AdmiralPicture.png';
// import Aroma from '../Assets/ProjectPictures/Aroma/AromaPicture.png';
// import OMR from '../Assets/ProjectPictures/OMR/OMR.png';
// import TwistMuseum from '../Assets/ProjectPictures/TwistMuseum/TwistDetailPicture.png';
// import Comics from '../Assets/ProjectPictures/Comics/ComicsPicture.png';

import { FaGithub, FaGoogleDrive, FaFileAlt } from 'react-icons/fa';

const sections = [
	{ section: "Coding Projects", projects: [
		{
			title: "The Admiral",
			subtitle: "CSCI 0320: Intro to Software Engineering",
			description: "For a final project for my software engineering class, three friends and I decided we wanted to try to use the skills we had developed in the class to create a game. We all really liked social deception games, and played them together often, and we wanted to see how we could bring the fun parts of those games to a video game. Thus, we created The Admiral, an online multiplayer game that combines classic elements of exploration and racing games with those of social deception games, set in a procedurally-generated underwater world. There were a few major parts to this game, including the marching cubes algorithm, perlin worms, player movement and collision, boids, user interface, and networking.",
			tags: ["C#", "Unity"],
			links: [{ label: "Code", icon: <FaGithub/>, navigation: "https://github.com/sohumgupta/the-admiral" }]
		},
		{
			title: "Optical Music Recognition",
			subtitle: "CSCI 1430: Computer Vision",
			description: "For our final project for our Computer Vision class, my group and I wanted to implement a high-level method for Optical Music Recognition, in order to produce MIDI files from images of sheet music. We decided to use an approach that combined traditional computer vision algorithms with deep learning techniques in order to detect and classify features, and use them to construct a MIDI file. In the end, while our program was able to correctly locate features, our convolutional neural network did not accurately classify features, so we were only able to produce MIDI files that could play songs with fixed-length notes. However, we believe that, with a working CNN model, we would theoretically be able to detect and classify many musical features, and create a robust program for Optical Music Recognition.",
			tags: ["Python", "Tensorflow"],
			links: [
				{ label: "Code", icon: <FaGithub/>, navigation: "https://github.com/zhaovan/optical-music-recognition" },
				{ label: "Output", icon: <FaGoogleDrive/>, navigation: "https://drive.google.com/drive/u/1/folders/1US38UjoFJvae8sWBRUofDYFYUlj4GUAP" },
				{ label: "Paper",icon: <FaFileAlt/>,  navigation: "https://drive.google.com/file/d/1fjCrmMXvm_VVK1YQK5QTbH71bTDhkyKC/view" },
			]
		},
		{
			title: "Aroma",
			subtitle: "YHack 2019",
			description: "Over the past few years, my friends and I have traveled a bit, with family, friends, or alone, and there's one thing that we all realized: the best travel recommendations we had found were from small, undiscovered travel blogs, written by people who just wanted to share their favorite experiences in a city. So we decided to create Aroma: a webapp for the modern traveller. Aroma is a place where young, urban travellers can find and create meaningful experiences in a city, and where people who know their city best can share their recommendations. Aroma is a MERN app (MongoDB, Express, React, and Node.js), since we wanted to use real, industry-standard frameworks, and wanted to explore how a modern web development project was carried out.",
			tags: ["React", "Express", "Node.js", "MongoDB"],
			links: [{ label: "Code", icon: <FaGithub/>, navigation: "https://github.com/sohumgupta/aroma" }]
		}
	]},
	{ section: "Creative Projects", projects: [
		{
			title: "The Twist Museum",
			subtitle: "HIAA 0860: Contemporary Architecture",
			description: "I created a digital model of the Twist Museum by the Bjarke Ingels Group for a Contemporary Architecture course. In making this model, I wanted to understand the relationship between the bridge and the environment in which it is built, as well as the twisted structure allows a flat walkway for pedestrians, while also bridging the height difference between the two sides of the landscape along the river. Finally, I produced a short, minute-long walkthrough of the model, looking at the model from different angles and demonstrating how it interacts with the environment, both from the outside and the inside.",
			tags: ["Blender", "Python"],
			links: [{ label: "Flythrough", icon: <FaGoogleDrive/>, navigation: "https://drive.google.com/file/d/1XtO7B3D4Di5dMmYjxVHbu5YALo7nq6GG/view" }]
		},
		{
			title: "Comics",
			subtitle: "LITR 0999: Graphic Novels and Comic Masterworks",
			description: "In the spring of my sophomore year, I took a small seminar class focused on graphic novels and comics. Over the course of the semester, I produced a few works that I wanted to share. One of the first assignments we did for the class was a short piece of writing, talking about an important experience we had with comics. I decided to create a sort of text-heavy, hybrid comic, which, along with everything else mentioned here, is in the linked Google Drive. For my midterm comic, I decided to create a sort of creative-nonfiction piece, based on some events in my childhood and visually modeled around a sort of instruction booklet or manual. Finally, for our final comic, a partner and I decided on a fresh take on a crime story, using only POV images of hands to tell the story of a man's life.",
			tags: ["Adobe Illustrator"],
			links: [{ label: "Comics", icon: <FaGoogleDrive/>, navigation: "https://drive.google.com/drive/u/1/folders/1lskf1p-q-OSHLlW7BBCPWL0UM0CsEknB?usp=sharing" }]
		},
	]}
];

export default sections;