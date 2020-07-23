import * as React from 'react';

import './ProjectPageMain.scss';

import ProjectPage from '../ProjectPage/ProjectPage';

import AdmiralVideo from '../../Assets/ProjectPictures/Admiral/AdmiralVideo.mov';

import { FaLink } from 'react-icons/fa';

class OMRPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="Software Engineering"
				title="The Admiral"
				date="May 2020"
				video={AdmiralVideo}
				links={[{ icon: <FaLink/>, url: ""}]}
				technologies={["Unity", "C#"]}
			>
				The Admiral is an online multiplayer game that combines classic elements of exploration and racing games with those of social deception games, set in a procedurally-generated underwater world. 
			</ProjectPage>
		)
	}
}

export default OMRPage;