import * as React from 'react';

import './ProjectPageMain.scss';

import ProjectPage from '../ProjectPage/ProjectPage';

import ComicsBanner from '../../Assets/ProjectPictures/Comics/ComicsBanner.png';
import FinalComicMockup from '../../Assets/ProjectPictures/Comics/FinalComicMockup.png';
import MidtermComicMockup from '../../Assets/ProjectPictures/Comics/MidtermComicMockup.png';
import PersonalComicMockup from '../../Assets/ProjectPictures/Comics/PersonalComicMockup.png';

import { FaGoogleDrive } from 'react-icons/fa';

class ComicsPage extends React.Component {
	render() {
		return (
			<ProjectPage
				organization="Comics Seminar"
				title="Personal Work"
				date="Spring 2020"
				image={ComicsBanner}
				links={[{ icon: <FaGoogleDrive/>, url: "https://drive.google.com/drive/folders/1lskf1p-q-OSHLlW7BBCPWL0UM0CsEknB?usp=sharing"}]}
				technologies={["Adobe Illustrator"]}
			>
				<p className="project-page-text">In the spring of my sophomore year, I took a small seminar class focused on graphic novels and comics. We read everything from Jack Kirby and Stan Lee's genre-changing <em>The Fantastic Four</em> to Art Spiegelman's critically-acclaimed <em>Maus</em>, and everything in between. Not only was the class filled with beautiful, interesting reads and passionate, knowledgable students, but we also got many chances to learn not only by consuming, but by creating. Thus, over the course of the semester, I produced a few works that I wanted to share.</p>
				<p className="project-page-text">One of the first assignments we did for the class was a short piece of writing, talking about an important experience we had with comics. I decided to create a sort of text-heavy, hybrid comic, which, along with everything else mentioned here, is in the Google Drive linked below.</p>
				<div className="project-page-picture">
					<img src={PersonalComicMockup} className="project-page-image"/>
				</div>
				<p className="project-page-text">For my midterm comic, I decided to create a sort of creative-nonfiction piece, based on some events in my childhood and visually modeled around a sort of instruction booklet or manual. I was really proud of how this came out, and I think that it really helped me appreciate a lot of the solo comics that we had read over the semester.</p>
				<div className="project-page-picture">
					<img src={MidtermComicMockup} className="project-page-image"/>
					<div className="project-page-caption"><p>My midterm comic, called <em>Paper Planes</em>.</p></div>
				</div>
				<p className="project-page-text">Finally, for our final comic, we each worked with someone else in the class to create a comic. For my comic, I worked on the art for the comic, while my partner wrote the script (much props to him, the script is amazing). Our comic is a fresh take on a crime story, using only POV images of hands to tell the story of a man's life. I think this was definitely the most polished thing I did all semester, and I really liked working with someone else on something creative like this.</p>
				<div className="project-page-picture">
					<img src={FinalComicMockup} className="project-page-image"/>
					<div className="project-page-caption"><p>My final comic, called "Old Hustle", co-authored with another student in the class.</p></div>
				</div>
			</ProjectPage>
		)
	}
}

export default ComicsPage;