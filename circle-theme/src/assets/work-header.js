import React from 'react';
import './work-header.scss';

import BackButton from './back-button.js';
import Circles from './circles.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class WorkHeader extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		var image = {
			 backgroundImage: "url(" + this.props.image + ")"
		}
		
		return(
			<div className="work-header" style={image}>
				<div className="back"><BackButton color="white" url="/work"></BackButton></div>
				<div className="titles">
					<h1 className="work-name">{this.props.name}</h1>
					<h2 className="work-descrip"> {this.props.descrip} |</h2>
					<h2 className="work-technologies">{this.props.technologies.map((tech) => <code>{tech}</code>)}</h2>
				</div>
			</div>
		);
	}
}

export default WorkHeader;