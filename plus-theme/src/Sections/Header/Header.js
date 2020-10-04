import * as React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

class HeaderLink extends React.Component {
	render() {
		return (
			<Link to={this.props.navigation}>
				<div className={"header-link" + (this.props.active ? " active": "")}>{this.props.label}</div>
			</Link>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className="header-wrapper">
				<div className="header-logo">
					<div className="logo-plus">
						<div className="plus-vertical"/>
						<div className="plus-horizontal"/>
					</div>
					<div className="logo-text">
						<p className="logo-s">Sohum</p>
						<p className="logo-g">Gupta</p>
					</div>
				</div>
				<div className="header-links">
					<HeaderLink label="Work" navigation="/" active={this.props.active == "Work"}/>
					<HeaderLink label="About" navigation="/about" active={this.props.active == "About"}/>
					<HeaderLink label="Resume" navigation="/resume" active={this.props.active == "Resume"}/>
				</div>
			</div>
		)
	}
}

export default Header;