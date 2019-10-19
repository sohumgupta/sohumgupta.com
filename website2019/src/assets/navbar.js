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
			<li><a>{this.props.text}</a></li>
		);
	}
}

const speed = 1.5;

class Navbar extends React.Component {
	
	state = {
		opacity: (Math.floor(0 * speed)).toString("16"),
	}
	
	componentDidMount() {
    document.addEventListener('scroll', () => {
			this.setState({opacity: (Math.floor(window.pageYOffset * speed)).toString("16")});
    });
  }
	
	render() {
		const navstyle = {
			backgroundColor: "#FFBA9D" + this.state.opacity,
		}
		
		return (
			<div id="navbar" style={navstyle}>
				<ul>
					<Navname text="Sohum Gupta"></Navname>
					<div id="navbar-right">
						<Navlink active={(this.props.active === "work") ? "active" : ""} url="/work" text="Work"></Navlink>
						<Navlink active={(this.props.active === "about") ? "active" : ""} url="/about" text="About"></Navlink>
						<li className="link">
							<a className={(this.props.active === "resume") ? "active" : ""} href="https://drive.google.com/file/d/1YXmB6IsWQ9FWrOR_FwUVmgU6gsC8a6lK/view?usp=sharing">
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