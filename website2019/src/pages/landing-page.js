import React from 'react';
import './landing-page.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import ExpandCircleButton from '../assets/expand-circle-button.js';

class Circles extends React.Component {
	render() {
		const dist = Math.sqrt(Math.pow(this.props.x, 2) + Math.pow(this.props.y, 2));
		
		const movement = .001;
		const gradient = .0002;
		
		console.log(gradient*dist);
		
		const style1 = {
			top: (-10 - movement*dist) + "vw",
			left: (-10 - movement*dist) + "vw",
			backgroundImage: "linear-gradient(to bottom right, #FFBA9D, rgba(255, 186, 157, " + (.5 - gradient*dist) + ")",
		}
		
		const style2 = {
			bottom: (5 - movement*dist) + "vw",
			right: (5 - movement*dist) + "vw",
			backgroundImage: "linear-gradient(to top left, #FFBA9D, rgba(255, 186, 157, " + (gradient*dist) + ")",
		}
		
		return (
			<>
				<div id="circle-1" style={style1}></div>
				<div id="circle-2" style={style2}></div>
			</>
		);
	}
};
			 
class LandingPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
		//console.log("y pos: " + screenY + ", x pos: " + screenX);
  }
	
	render() {
		return (
			<div id="body">
				<div id="landing-page" onMouseMove={this._onMouseMove.bind(this)}>
					<div id="landing-page-top">
						<p id="landing-page-text">Hi, I'm Sohum Gupta.</p>
					</div>
					<div id="landing-page-bottom">
						<Link to="/work">
							<ExpandCircleButton text="see more"></ExpandCircleButton>
						</Link>
					</div>
					<Circles x={this.state.x} y={this.state.y}></Circles>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default LandingPage;