import React from 'react';
import './navbar.scss';

class Navlink extends React.Component {
	render() {
		return (
			<li className="link"><a className={this.props.active} href={this.props.url}>{this.props.text}</a></li>
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

class Navbar extends React.Component {
	render() {
		return (
			<div id="navbar">
				<ul>
					<Navname text="Sohum Gupta"></Navname>
					<div id="navbar-right">
						<Navlink active={(this.props.active === "work") ? "active" : ""} url="/work" text="Work"></Navlink>
						<Navlink active={(this.props.active === "about") ? "active" : ""} url="/about" text="About"></Navlink>
						<Navlink active={(this.props.active === "resume") ? "active" : ""} url="/resume" text="Résumé"></Navlink>
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