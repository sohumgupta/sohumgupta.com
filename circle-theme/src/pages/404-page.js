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
import Circles from '../assets/circles.js';

class ErrorPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }
	
	render() {
		return (
			<div id="body">
				<div id="landing-page" onMouseMove={this._onMouseMove.bind(this)}>
					<div id="landing-page-top">
						<p id="landing-page-text">Oops! This page doesn't exist...</p>
					</div>
					<div id="landing-page-bottom">
						<ExpandCircleButton url="/work" text="go to my site!"></ExpandCircleButton>
					</div>
					<Circles x={this.state.x} y={this.state.y}></Circles>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default ErrorPage;