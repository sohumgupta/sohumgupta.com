import React from 'react';
import './navbar.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Navlink extends React.Component {
	render() {
		return (
			<li className="link"><Link className={this.props.active} to={this.props.url}>{this.props.text}</Link></li>
		);
	}
}

class Navname extends React.Component {
	render() {
		return (
			<li className="name"><a>{this.props.text}</a></li>
		);
	}
}

const speed = 0.005;

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {opacity: this.props.opacity}
	}
	
	state = {
		opacity: 0
	}


	componentDidMount() {
		if (this.props.opacity == 0) {
			this.interval = setInterval(() => this.setState({opacity: (window.pageYOffset * speed)}), 10);
		}
	}
	
	render() {
		const navstyle = {
			backgroundColor: "rgba(247, 162, 156, " + this.state.opacity + ")",
		}
		
		return (
			<div className="navbar" style={navstyle}>
				<ul>
					<Navname text="Sohum Gupta"></Navname>
					<div className="navbar-right">
						<Navlink active={(this.props.active === "work") ? "active" : ""} url="/work" text="Work"></Navlink>
						<Navlink active={(this.props.active === "about") ? "active" : ""} url="/about" text="About"></Navlink>
						<li className="link">
							<a className={(this.props.active === "resume") ? "active" : ""} target="_blank" href="https://drive.google.com/file/d/1YXmB6IsWQ9FWrOR_FwUVmgU6gsC8a6lK/view?usp=sharing">
								Résumé
							</a>
						</li>
					</div>
				</ul>
			</div>
		);
	}
	
	static defaultProps = {
		active: "work",
	}
}

export default Navbar;