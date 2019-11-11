import React from 'react';
import './back-button.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class BackButton extends React.Component {
	render() {
		return (
			<Link to={this.props.url} className="back-button">
				<svg width="13px" height="10px" viewBox="0 0 13 10">
					<path d="M1,5 L11,5"></path>
					<polyline points="8 1 12 5 8 9"></polyline>
				</svg>
				<span>Back</span>
			</Link>
		);
	}
	
	static defaultProps = {
		url: "#",
	}
}

export default BackButton;