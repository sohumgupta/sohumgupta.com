import * as React from 'react';

import Admiral from '../Assets/ProjectPictures/Admiral/AdmiralPicture.png';
import Aroma from '../Assets/ProjectPictures/Aroma/AromaPicture.png';
import OMR from '../Assets/ProjectPictures/OMR/OMR.png';
import TwistMuseum from '../Assets/ProjectPictures/TwistMuseum/TwistDetailPicture.png';
import Comics from '../Assets/ProjectPictures/Comics/ComicsPicture.png';

const projects = [
	{
		title: "The Admiral",
		image: Admiral,
		navigation: "/admiral"
	},
	{
		title: "Optical Music Recognition",
		image: OMR,
		navigation: "/dailymidi"
	},
	{
		title: "Aroma",
		image: Aroma,
		navigation: "/aroma"
	},
	{
		title: "The Twist Museum",
		image: TwistMuseum,
		navigation: "/twistmuseum"
	},
	{
		title: "Comics",
		image: Comics,
		navigation: "/comics"
	},
];

export default projects;