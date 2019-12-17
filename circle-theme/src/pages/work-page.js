import React from 'react';
import './work-page.scss';

import ExpandCircleButton from '../assets/expand-circle-button.js';
import Circles from '../assets/circles.js';

import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import WorkCard from '../assets/work-card.js';

import SeniorEdition from '../images/main/graphicdesign.png';
import Mixr from '../images/main/mixrhome.png';
import Aroma from '../images/main/aromahome.png';
import Shell from '../images/main/shell.png';
import Stoic from '../images/main/stoic.png';
import Photography from '../images/main/photography.png';
import Collegeboard from '../images/main/collegeboard.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class WorkPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, redirect: false, newURL:"" };
  }

  _onMouseMove(e) {
   this.setState({ x: e.screenX, y: e.screenY });
		//console.log("y pos: " + screenY + ", x pos: " + screenX);
  }
	
	render() {
		return (
			<div id="body">
				<div id="work-page" onMouseMove={this._onMouseMove.bind(this)}>
					<Navbar opacity={0}></Navbar>
					<div id="work-container">
						<WorkCard name="Stoic Design" image={Stoic} page="/work/stoic" />
						<WorkCard name="MIXR" image={Mixr} page="/work/mixr" />
						<WorkCard name="Shell" image={Shell} page="/work/shell" />
						<WorkCard name="Aroma" image={Aroma} page="/work/aroma" />
						<WorkCard name="CollegeBoard Redesign" image={Collegeboard} page="/work/collegeboard" />
						<WorkCard name="Senior Edition" image={SeniorEdition} page="/work/senioredition" />
						<WorkCard name="Film Photography" image={Photography} page="/work/photography" />
					</div>
					<Circles x={this.state.x} y={this.state.y}></Circles>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default WorkPage;