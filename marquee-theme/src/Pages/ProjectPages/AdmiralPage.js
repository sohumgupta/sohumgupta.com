import * as React from 'react';

import './ProjectPageMain.scss';

import ProjectPage from '../ProjectPage/ProjectPage';

import AdmiralVideo from '../../Assets/ProjectPictures/Admiral/AdmiralVideo.mov';

import { FaGithub } from 'react-icons/fa';

class AdmiralPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="Software Engineering"
				title="The Admiral"
				tabTitle="The Admiral"
				date="May 2020"
				video={AdmiralVideo}
				links={[{ icon: <FaGithub/>, url: "https://github.com/sohumgupta/the-admiral"}]}
				technologies={["Unity", "C#"]}
			>
				<p className="project-page-text">For a final project for my software engineering class, three friends and I decided we wanted to try to use the skills we had developed in the class to create a game. We all really liked social deception games, and played them together often, and we wanted to see how we could bring the fun parts of those games to a video game. Thus, we createtd The Admiral, an online multiplayer game that combines classic elements of exploration and racing games with those of social deception games, set in a procedurally-generated underwater world.</p>
				<p className="project-page-text">There were a few major parts to this game, including the marching cubes algorithm, perlin worms, player movement and collision, boids, user interface, and networking.</p>
				<p className="project-page-text">We used the marching cubes algorithm to create a 3-dimensional mesh from a noise function, so that we could render our environment based on some procedurally-generated function. Then, in order to create an environment with paths, we used the perlin worms algorithm. First, we used basic 3D noise to create some variance in the underwater word, and then we used perlin worms to carve paths out of the environment, so that there were paths that the players could explore.</p>
				<p className="project-page-text">Then, for player movement, we created a script that took in user input and translated that to directions and speeds, that we could use to control our submarine. For collision, we initially tried to implement our own algorithm using rays that we emitted from the player, but we decided eventually to use Unity's built-in character controller.</p>
				<p className="project-page-text">We used the free Photon library for networking, and we used Unity's built in Canvas system to create the user interface for the game. Finally, once we had finished the major components of the game, we decided to implement the boids algorithm to create schools of fish that would swim around the underwater environment and interact with the world and the submarine.</p>
				<p className="project-page-text">Overall, we were extremely happy with the end result, as we were able to implement everything that we originally set out to implement, and more, and it was the first full game that any of us had ever worked on and compeleted.</p>
			</ProjectPage>
		)
	}
}

export default AdmiralPage;