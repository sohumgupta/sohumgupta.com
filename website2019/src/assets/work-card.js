import React from 'react';
import './work-card.scss';

import ExpandCircleButton from '../assets/expand-circle-button.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class WorkCard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="card" style={{backgroundImage:"url(" + this.props.image + ")"}}>
				<ExpandCircleButton url={this.props.page} text={this.props.name} color="white" class="card-name"></ExpandCircleButton>
			</div>
		);
	}
}

export default WorkCard;