import * as React from 'react';
import './ContactSection.scss';

import SocialIcon from '../../Components/SocialIcon/SocialIcon';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

class ContactSection extends React.Component {
	render() {
		return (
			<div className="contact-wrapper">
				<div className="contact-socials">
					<SocialIcon url="https://github.com/sohumgupta"><FaGithub/></SocialIcon>
					<SocialIcon url="https://www.instagram.com/sohum_gupta/"><FaInstagram/></SocialIcon>
					<SocialIcon url="https://www.linkedin.com/in/sohum-gupta/"><FaLinkedinIn/></SocialIcon>
					<SocialIcon url="mailto:sohum_gupta@brown.edu"><FaRegEnvelope/></SocialIcon>
				</div>
			</div>
		)
	}
}

export default ContactSection;