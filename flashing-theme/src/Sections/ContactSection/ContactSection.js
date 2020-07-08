import * as React from 'react';
import './ContactSection.scss';

import Icon from '../../Components/Icon/Icon';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

class ContactSection extends React.Component {
	render() {
		return (
			<div className="contact-wrapper">
				<div className="contact-socials">
					<Icon url="https://github.com/sohumgupta"><FaGithub/></Icon>
					<Icon url="https://www.instagram.com/sohum_gupta/"><FaInstagram/></Icon>
					<Icon url="https://www.linkedin.com/in/sohum-gupta/"><FaLinkedinIn/></Icon>
					<Icon url="mailto:sohum_gupta@brown.edu"><FaRegEnvelope/></Icon>
				</div>
			</div>
		)
	}
}

export default ContactSection;