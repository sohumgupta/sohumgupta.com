import * as React from 'react';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';

const projects = [
	{
		organization: "Software Engineering",
		title: "The Admiral",
		date: "May 2020 ",
		description: "This was cool project i did!!!",
		technologies: ["Unity", "C#", "Blender"],
		icons: [
			{ icon: <FaGithub/>, url: "" },
			{ icon: <FaGoogleDrive/>, url: "" },
		]
	}
]

export default projects;