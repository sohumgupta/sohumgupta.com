import React from 'react';
import './footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footer-left">Copyright &copy; 2019, Sohum Gupta</div>
				<div className="footer-center">
					<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sohum_gupta@brown.com" target="_blank" className="fa fa-envelope-o"></a>
					<a href="https://www.linkedin.com/in/sohum-gupta/" target="_blank" className="fa fa-linkedin"></a>
					<a href="https://www.instagram.com/sohum_gupta/" target="_blank" className="fa fa-instagram"></a>
			 		<a href="https://github.com/sohumgupta" target="_blank" className="fa fa-github"></a>
				</div>
				<div className="footer-right">made with &hearts; by sohum gupta</div>
			</div>
		);
	}
}

export default Footer;