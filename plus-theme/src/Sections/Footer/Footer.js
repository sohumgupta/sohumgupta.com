import * as React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa';

class Footer extends React.Component {
	render() {
		const resizeClass = this.props.resize ? " footer-resize" : ""

		return (
			<div className={"footer-wrapper" + resizeClass}>
				<div className="footer-text">
					Copyright &copy; {(new Date().getFullYear())} Sohum Gupta
				</div>
				<div className="footer-links">
					<a title="My Resume" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1i0ENmjIy9M2RAh-wB2KB139eqPXDl-ZC/view?usp=sharing"><FaRegFileAlt/></a>
					<a title="E-Mail Me!" target="_blank" rel="noopener noreferrer" href="mailto:sohum_gupta@brown.edu"><FaRegEnvelope/></a>
					<a title="My LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sohum-gupta/"><FaLinkedin/></a>
					<a title="My Github" target="_blank" rel="noopener noreferrer" href="https://github.com/sohumgupta"><FaGithub/></a>
					<a title="My Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sohum_gupta/"><FaInstagram/></a>
				</div>
			</div>
		)
	}
}

export default Footer;