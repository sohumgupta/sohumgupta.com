import * as React from 'react';

import './ProjectPageMain.scss';

import ProjectPage from '../ProjectPage/ProjectPage';

import TwistMuseumVideo from '../../Assets/ProjectPictures/TwistMuseum/TwistMuseumVideo.mp4';
import TwistMuseumFront from '../../Assets/ProjectPictures/TwistMuseum/FrontPicture.png';
import TwistMuseumTop from '../../Assets/ProjectPictures/TwistMuseum/TopPicture.png';
import TwistMuseumDetail from '../../Assets/ProjectPictures/TwistMuseum/TwistDetailPicture.png';

import { FaGoogleDrive } from 'react-icons/fa';

class TwistMuseumPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="Contemporary Architecture"
				title="The Twist Museum"
				date="May 2020"
				video={TwistMuseumVideo}
				links={[{ icon: <FaGoogleDrive/>, url: "https://drive.google.com/file/d/1XtO7B3D4Di5dMmYjxVHbu5YALo7nq6GG/view?usp=sharing"}]}
				technologies={["Blender", "Python", "Adobe Premiere"]}>
				<p className="project-page-text">I created a digital model of the Twist Museum by the Bjarke Ingels Group for a Contemporary Architecture course. In making this model, I wanted to understand the relationship between the bridge and the environment in which it is built, as well as the twisted structure allows a flat walkway for pedestrians, while also bridging the height difference between the two sides of the landscape along the river.</p>
				<div className="project-page-picture">
					<img src={TwistMuseumFront} className="project-page-image"/>
					<p className="project-page-caption"><p>This angle shows how the museum interacts with its environment.</p></p>
				</div>
				<p className="project-page-text">After building the model, I was extremely surprised by how the form of the building naturally created a walkway within the interior. I modeled the building using images of each ‘slice’, and after rotating them and positioning them the way they are in the real design, the interior of the building had sort of become a flat walkway with two separate wings, without having to explicitly carve anything out of the interior. I was also surprised to see how close the bottom of the bridge gets to the river, and how it seems to sit only slightly above the water, as if it is floating above the landscape.</p>
				<div className="project-page-picture">
					<img src={TwistMuseumTop} className="project-page-image"/>
					<p className="project-page-caption"><p>A top view, showing the layout and topography of the landscape around the museum.</p></p>
				</div>
				<p className="project-page-text">While I had originally planned to use only Blender’s built-in functionality to create my model, I eventually had to write a Python script in order to be able to model the twisting section of the bridge. This was because I needed to create objects blending between two objects in a way that changed both scale and rotation and needed to do so in a smooth way (I eventually ended up using a sigmoid function to vary rotation and scale smoothly). I also ran into issues while rendering (namely, that each frame would take 15 minutes to render) and had to mess around with options to decrease this time to about 3-8 minutes per frame.</p>
				<div className="project-page-picture">
					<img src={TwistMuseumDetail} className="project-page-image"/>
					<p className="project-page-caption"><p>A close-up of the twist, modeled using a Python script.</p></p>
				</div>
			</ProjectPage>
		)
	}
}

export default TwistMuseumPage;