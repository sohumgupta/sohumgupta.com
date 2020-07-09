import * as React from 'react';

import './TwistMuseumPage.scss';

import ProjectPage from '../ProjectPage/ProjectPage';
import TwistMuseum from '../../Assets/ProjectPictures/TwistMuseum.png';
import { FaGoogleDrive } from 'react-icons/fa';

class TwistMuseumPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="Contemporary Architecture"
				title="The Twist Museum"
				date="May 2020"
				image={TwistMuseum}
				links={[{ icon: <FaGoogleDrive/>, url: "https://drive.google.com/file/d/1XtO7B3D4Di5dMmYjxVHbu5YALo7nq6GG/view?usp=sharing"}]}
				technologies={["Blender", "Python", "Adobe Premiere"]}
			>
				I created a digital model of the Twist Museum by the Bjarke Ingels Group. In making this model, I wanted to understand the relationship between the bridge and the environment in which it is built, as well as the twisted structure allows a flat walkway for pedestrians, while also bridging the height difference between the two sides of the landscape along the river. After building the model, I was extremely surprised by how the form of the building naturally created a walkway within the interior. I modeled the building using images of each ‘slice’, and after rotating them and positioning them the way they are in the real design, the interior of the building had sort of become a flat walkway with two separate wings, without having to explicitly carve anything out of the interior. I was also surprised to see how close the bottom of the bridge gets to the river, and how it seems to sit only slightly above the water, as if it is floating above the landscape.
				<br/><br/>
				While I had originally planned to use only Blender’s built-in functionality to create my model, I eventually had to write a Python script in order to be able to model the twisting section of the bridge. This was because I needed to create objects blending between two objects in a way that changed both scale and rotation and needed to do so in a smooth way (I eventually ended up using a sigmoid function to vary rotation and scale smoothly). I also ran into issues while rendering (namely, that each frame would take 15 minutes to render) and had to mess around with options to decrease this time to about 3-8 minutes per frame.
			</ProjectPage>
		)
	}
}

export default TwistMuseumPage;