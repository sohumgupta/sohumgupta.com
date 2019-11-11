import React from 'react';
import './photography-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import PhotographyHeader from '../../images/photography/photographyheader.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class PhotographyPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="photography-page">
					<WorkHeader image={PhotographyHeader} name="Film Photography" descrip="Just a Hobby!" technologies={["Pentax K1000", "Kodak Colorplus 200", "Ilford HP5 PLUS"]}/>
					<div className="content">
						I've been wanting to pick up photography for a long time, but it never happened, until this past summer. I was watching Youtube videos about film photography, and something about film just felt... right. 
						<br/><br/>
						So I picked up a film camera off Ebay and some bottom-shelf film from Amazon, and took it on a family road trip to Quebec City. I'm not a professional, of course, but I had a lot of fun, and I think film is definitely my medium. <mark className="bold"> As of right now, however, all my film is currently in the lab, in a soothing chemical bath :)</mark>
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default PhotographyPage;