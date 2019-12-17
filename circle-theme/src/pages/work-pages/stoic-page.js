import React from 'react';
import './stoic-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import SketchesOne from '../../images/stoic/sketches_one.png';
import SketchesTwo from '../../images/stoic/sketches_two.png';
import MockupOne from '../../images/stoic/original_mockup.png';
import MockupTwo from '../../images/stoic/redesigned_mockup.png';
import StoicHeader from '../../images/stoic/stoicheader.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class StoicPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="stoic-page">
					<WorkHeader image={StoicHeader} name="Stoic Design" descrip="Created for CSCI 1300, Fall 2019" technologies={["Adobe XD", "UserTesting"]}/>
					<div className="content">
						Scrolling through the YCombinator startups for this year, my group and I saw one startup in particular that stuck out: <mark className="bold">Stoic</mark>. Stoic is a mental health journaling app designed to act as a simple platform to llow users to document and track their mental health over long periods of time, by asking users targeted questions each morning and each evening. It also allows users to set goals for themselves to better understand themselves, and to get a sense of what aspects of their mental health can be improved. <mark className="bold">Thus, we decided that we would try to do our own design for this app, and see what users thought about it.</mark>
						<br/><br/>
						Before creating any sort of high-fidelity mockup, however, we decided to first create some low-fidelity sketches of what we thought the design could look like. I created two different sets of sketches of what the app could look like, with different themes and different approaches in terms of incorporating the purpose of the app. The two sketches are below.
									
						<div className="picture">
							<img src={SketchesOne} className="picture-image"/>
							<img src={SketchesTwo} className="picture-image"/>
							<p className="picture-caption">My two sets of sketches, representing two different ideas for our app.</p>
						</div>
			
						From here, we decided to create a higher-fidelity prototype of our app that we could use for user testing. Our original mockup is available at <a className="text-link" target="_blank" href="https://www.tinyurl.com/stoicoriginal">www.tinyurl.com/stoicoriginal</a>.
			
						<div className="picture">
							<img src={MockupOne} className="picture-image"/>
							<p className="picture-caption">Our original mockup, using the ideas from the sketches we made.</p>
						</div>
			
						We selected sketch Set 2 as a base for our mockup. We thought that the graph element introduced in Set 2 was a unique feature that rendered two granular metrics in a visual and memorable form. Instead of prompting the user to enter this information with two linear sliders, which would have an arbitrary order and relationship, by using two perpendicular gradients, we were also able to make the graph a central visual element, with an approach to color which informed the rest of the application. This mechanism also simplifies user interaction, condensing two swiping actions into one, perhaps more deliberate placement action. Other elements were adapted from other sketches, such as the calendar interface from Set 1. 
						<br/><br/>
						Much of the feedback we received in a critique session surrounded confusion that would have been minimized had our peers been properly onboarded. However, some of their comments also motivated us to change our “edit log” button to include a text label, increasing learnability, and dif- ferentiating colors, so the “feel” of each axis is more memorable.
						<br/><br/>
						Our revised mockup is available at <a className="text-link" target="_blank" href="https://www.tinyurl.com/stoicredesign">www.tinyurl.com/stoicredesign</a>.
						
						<div className="picture">
							<img src={MockupTwo} className="picture-image"/>
							<p className="picture-caption">Our redesigned mockup, taking into account all of the feedback we received.</p>
						</div>
			
						From here, we submitted our prototype to usertesting.com, in order to collect feedback from real users on our prototype.
						<br/><br/>
						After watching the videos and listening to the users talk their way through the app, it seems like most of the slip-ups that users had were the same. Generally, users were a bit unsure what the “log your day” screen represented, and often didn’t realize that there was more to the app until quite far into using the app (i.e. it took them quite a while to get to the main tracker page). People were also a bit confused about the liked content page, and one did not even get to it. Other than that, however, the users said the navigation of the app was generally quite intuitive and that they liked the simple design and were fairly satisfied while completing the tasks. The only thing that two users disagreed on was the fact that one thought the logging of mood/energy should be separate, while another really liked the way that we implemented logging mood/energy.
						<br/><br/>
						Based on the UserTesting results and feedback, we would make some changes to the daily log pages and the main page. First, we would make it more clear what the daily log page was, perhaps by putting a header and perhaps a small subtitle. We would also make the daily log page and the submission page popups, so it is clear that there is more to the app than simply those two pages. We could also slightly tweak the mood/energy logging system to keep it as a grid, but to make it more discrete (i.e. the grid could be 10x10, so it has 100 total combinations of mood and energy). We would also make the liked content and settings stand out a bit more, so users don’t miss those pages. Finally, we would add some more customization to the app, so that users can choose color schemes and the types of content they receive.
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
		
	};
}

export default StoicPage;