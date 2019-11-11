import React from 'react';
import './senior-edition-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import SeniorEditionHeader from '../../images/senior edition/senioreditionheader.png';
import LetterPage from '../../images/senior edition/letterpage.png';
import CoverMockup from '../../images/senior edition/senioreditioncover.png';
import PagesMockup from '../../images/senior edition/senioreditionpages.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class SeniorEditionPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="senior-edition-page">
					<WorkHeader image={SeniorEditionHeader} name="Senior Edition" descrip="Created for Acronym 2018" technologies={["Adobe Illustrator", "Adobe Photoshop"]}/>
					<div className="content">
						I went to the <mark className="bold">Illinois Mathematics and Science Academy</mark> for three years of my high school. It was three years of hell, with too much caffeine and not enough sleep, but because it was a residential school, everyone there became very attached to the school, and to each other. 
						<br/><br/>
						I had the honor of being the layout designer for our school newspaper, the Acronym, and at the end of each year, the Acronym released a special <mark className="bold">Senior Edition</mark>. This being my senior year, I wanted nothing but to make it amazing. 
						<br/><br/>
						As part of being the layout designer, I picked the theme, and the theme I decided on was <mark className="bold">waves.</mark> I could explain the theme, but I think my senior year self explained it better in the last page of the Senior Edition.
			
						<div className="picture-quote">
							<img src={LetterPage} className="picture-image-left"/>
							<p className="quote">
								<hr/>
								"Three years of waves, ebbing and flowing [...] waves of feelings, waves of passions, and of course, waves of homework."
								<hr/>
							</p>
						</div>
						
						I think a part of what made the Senior Edition so special to me was the fact that it was the first piece of graphic design or layout design that I was able to hold and feel in print. A lot of the other graphic design work I had done was either only seen on a screen, or was printing on t-shirts, and having a nice, bound magazine that I designed was a first for me. 
	
						<div className="picture">
							<img src={PagesMockup} className="picture-image"/>
							<p className="picture-caption">A couple of pages from the middle of the edition.</p>
						</div>
			
						I enjoyed the creativity that the project gave me, allowing me to create a lot of illustrations and graphics, and letting me choose basically everything about the layout, design, and theme of the project. Even though, looking back on it, I see all the mistakes I made, or all of the places where I could have done better work, I still think that this is one of the most meaningful projects I've ever worked on, and I'll always hold on to it as the first big print project I've ever done.
			
						<div className="picture">
							<img src={CoverMockup} className="picture-image"/>
							<p className="picture-caption">The cover that I painstakingly created for the Senior Edition!</p>
						</div>
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default SeniorEditionPage;