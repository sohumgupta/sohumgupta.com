import * as React from 'react';

import './ProjectPageMain.scss';

import ProjectPage from '../ProjectPage/ProjectPage';

import OMRBanner from '../../Assets/ProjectPictures/OMR/OMRBanner.png';
import OMRFlowChart from '../../Assets/ProjectPictures/OMR/OMRFlowChart.png';

import { FaGithub, FaGoogleDrive, FaLink } from 'react-icons/fa';

class OMRPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="Computer Vision"
				title="Optical Music Recognition"
				tabTitle="Optical Music Recognition"
				date="May 2020"
				image={OMRBanner}
				links={[{ icon: <FaGithub/>, url: "https://github.com/zhaovan/optical-music-recognition"},
						{ icon: <FaGoogleDrive/>, url: "https://drive.google.com/drive/folders/1US38UjoFJvae8sWBRUofDYFYUlj4GUAP?usp=sharing"}, 
						{ icon: <FaLink/>, url: "https://drive.google.com/file/d/1fjCrmMXvm_VVK1YQK5QTbH71bTDhkyKC/view?usp=sharing"}, 
					]}
				technologies={["Python", "Tensorflow"]}
			>
				<p className="project-page-text">For our final project for our Computer Vision class, my group and I wanted to implement a high-level method for Optical Music Recognition, in order to produce MIDI files from images of sheet music. We decided to use ana pproach that combined traditional computer vision algorithms with deep learning techniques in order to detect and classify features, and use them to construct a MIDI file. I nthe end, while our program was able to correctly locate features, our convolutional neural network did not accurately classify features, so we were only able to produce MIDI files that could play songs with fixed-length notes. However, web elieve that, with a working CNN model, we would theoretically be able to detect and classify many musical features, and create a robust program for Optical Music Recognition.</p>
				<div className="project-page-picture">
					<img src={OMRFlowChart} className="project-page-image"/>
					<div className="project-page-caption"><p>A flow chart describing our process.</p></div>
				</div>
				<p className="project-page-text">We decided to use a combination of traditional and deep-learning computer vision techniques to extract and classify features. In terms of preprocessing, we used staff detection and staff removal to clean up the image. Then, we used the Hough Circle Transform to detect noteheads, and we used bounding boxes and a convolutional neural network to classify features. Finally, we used feature locations tom atch features to pitches, and created a MIDI file using the PrettyMidi library.</p>
				<p className="project-page-text">In going forward, the biggest thing would be to us an end-to-end neural network that does all of the classification, detection, and corresponding output without any of the other algorithms needed for feature detection. In addition, the other way that this project could be improved upon going forward would be to increase the size of the dataset (we used only a subset of the DeepScores dataset to improve classification accuracy) and to use all the possible classes. Thus, it would be able to recreate the entire sheet music. However, we were still proud of how much information we were able to extract and turn into MIDI, given our time and resource constraints.</p>
			</ProjectPage>
		)
	}
}

export default OMRPage;