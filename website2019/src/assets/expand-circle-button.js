import React from 'react';
import './expand-circle-button.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class expandCircleButton extends React.Component {
	render() {
		return (
			<Link to={this.props.url} className="expand-circle">
				<span>{this.props.text}</span>
				<svg width="13px" height="10px" viewBox="0 0 13 10" style={{stroke: this.props.color}}>
					<path d="M1,5 L11,5"></path>
					<polyline points="8 1 12 5 8 9"></polyline>
				</svg>
			</Link>
		);
	}
	
	static defaultProps = {
		url: "#",
		text: "click me",
		color: "black"
	}
}

export default expandCircleButton;