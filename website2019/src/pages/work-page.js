import React from 'react';
import './work-page.scss';

import ExpandCircleButton from '../assets/expand-circle-button.js';
import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import Pentax from '../images/pentaxk1000.png';

class WorkCard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="card" style={{backgroundImage:"url(" + this.props.image + ")"}}>
				<ExpandCircleButton text={this.props.name} color="white" class="card-name"></ExpandCircleButton>
			</div>
		);
	}
}

class WorkPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    //this.setState({ x: e.screenX, y: e.screenY });
		//console.log("y pos: " + screenY + ", x pos: " + screenX);
  }
	
	render() {
		return (
			<div id="body">
				<div id="work-page" onMouseMove={this._onMouseMove.bind(this)}>
					<Navbar></Navbar>
					<div id="work-container">
						<WorkCard name="Photography" image={Pentax}></WorkCard>
						<WorkCard name="Star Identifier"></WorkCard>
						<WorkCard name="Search Algorithm"></WorkCard>
						<WorkCard name="work-1"></WorkCard>
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default WorkPage;