import * as React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import GooCircles from '../../Components/GooCircles/GooCircles';

class HeaderLink extends React.Component {
	render() {
		if (this.props.active) {
			return <div className={"header-link" + (this.props.active ? " active": "")}>{this.props.label}</div>
		} else {
			return (
				<Link to={this.props.navigation}>
					<div className={"header-link" + (this.props.active ? " active": "")}>{this.props.label}</div>
				</Link>
			)
		}
	}
}

class Header extends React.Component {
	render() {
		const resizeClass = this.props.resize ? " header-resize" : ""

		return (
			<div className={"header-wrapper" + resizeClass}>
				<div className="header-logo">
					Sohum Gupta
					<GooCircles/>
				</div>
				<div className="header-links">
					<HeaderLink label="Work" navigation="/" active={this.props.active === "Work"}/>
					<HeaderLink label="About" navigation="/about" active={this.props.active === "About"}/>
					<HeaderLink label="Resume" navigation="/resume" active={this.props.active === "Resume"}/>
				</div>
			</div>
		)
	}
}

export default Header;