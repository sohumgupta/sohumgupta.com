import * as React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer-wrapper">
				<div className="footer-text">
					Copyright &copy; {(new Date().getFullYear())} Sohum Gupta
				</div>
				<div className="footer-links">
					<a target="_blank" rel="noopener noreferrer" href="mailto:sohum_gupta@brown.edu"><FaRegEnvelope/></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sohum-gupta/"><FaLinkedin/></a>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/sohumgupta"><FaGithub/></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sohum_gupta/"><FaInstagram/></a>
				</div>
			</div>
		)
	}
}

export default Footer;