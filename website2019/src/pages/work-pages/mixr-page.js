import React from 'react';
import './mixr-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import MIXRHeader from '../../images/mixrheader.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class MixrPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="mixr-page">
					<WorkHeader image={MIXRHeader} name="MIXR" descrip="Created for Hack@Brown 2019" technologies="HTML, CSS, PHP, JavaScript">
			</WorkHeader>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default MixrPage;