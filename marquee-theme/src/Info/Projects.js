import * as React from 'react';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';

import Admiral from '../Assets/ProjectPictures/Admiral.png';
import OMR from '../Assets/ProjectPictures/OMR.png';

const projects = [
	{
		organization: "Software Engineering",
		title: "The Admiral",
		date: "May 2020",
		description: "This was cool project i did!!!",
		technologies: ["Unity", "C#", "Blender"],
		icons: [
			{ icon: <FaGithub/>, url: "" },
			{ icon: <FaGoogleDrive/>, url: "" },
		],
		image: Admiral
	},
	{
		organization: "Computer Vision",
		title: "Optical Music Recognition",
		date: "May 2020",
		description: "This was cool project i did!!!",
		technologies: ["Python", "Tensorflow"],
		icons: [
			{ icon: <FaGithub/>, url: "" },
			{ icon: <FaGoogleDrive/>, url: "" },
		],
		image: OMR
	},
	{
		organization: "Computer Vision",
		title: "Optical Music Recognition",
		date: "May 2020",
		description: "This was cool project i did!!!",
		technologies: ["Python", "Tensorflow"],
		icons: [
			{ icon: <FaGithub/>, url: "" },
			{ icon: <FaGoogleDrive/>, url: "" },
		],
		image: OMR
	},
]

export default projects;