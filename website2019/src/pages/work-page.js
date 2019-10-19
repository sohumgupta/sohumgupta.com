import React from 'react';
import './work-page.scss';

import ExpandCircleButton from '../assets/expand-circle-button.js';
import Circles from '../assets/circles.js';

import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import WorkCard from '../assets/work-card.js';

import Pentax from '../images/pentaxk1000.png';

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
					<Navbar></Navbar>
					<div id="work-container">
						<WorkCard name="MIXR" page="/work/mixr"></WorkCard>
						<WorkCard name="Search Algorithm" page="/work/search"></WorkCard>
						<WorkCard name="CollegeBoard Redesign" page="/work/collegeboard"></WorkCard>
						<WorkCard name="Star Identifier" page="/work/startree"></WorkCard>
						<WorkCard name="Graphic Design" page="/work/graphicdesign"></WorkCard>
						<WorkCard name="Photography" image={Pentax} page="/work/photography"></WorkCard>
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