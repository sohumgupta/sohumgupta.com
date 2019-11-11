import React from 'react';
import './shell-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import ShellHeader from '../../images/shell/shellheader.png';
import ShellMain from '../../images/shell/shell.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class ShellPage extends React.Component {
	constructor(props) {
    super(props);
  }
	
	render() {
		return (
			<div id="body">
				<div id="shell-page">
					<WorkHeader image={ShellHeader} name="Shell" descrip="Created for CSCI 0330, Fall 2019" technologies={["C"]}/>
					<div className="content">
						For my <mark className="bold">Intro to Systems</mark> this semester, we were tasked (as one of our larger projects) in creating our own shell using C. While this was not necessarily the "flashiest" project, or a project that looks the best on a portfolio, I think I learnt a lot through doing this project, and I liked that we ended the project with a large, practical product that could be seen as the starting point for the shell that I use every single day. 
						<div className="picture">
							<img src={ShellMain} className="picture-image"/>
							<p className="picture-caption">My shell (running through my regular terminal)!</p>
						</div>
						In order to read user input, I have a while loop that reads until EOF. Then, I extract the tokens from the inputted string, and checked if the first token was a shell command (i.e. "cd", "rm", "ln", or "exit"). If it was, I handled the command, otherwise, I parse through all the tokens for redirect tokens and finds any input/output files. Then, if the input is valid, I create a child process, open any necessary input or output files, and carry out the inputted command, with any inputted arguments.
						<br/>
						<br/>
						For the second part of the project, I had to make some major additions. First, I had to handle signals so that signals only get sent to foreground child processes. Then, when running a foreground process, I wait for termination/suspension either normally or with a signal. Also, right before each prompt is printed, I check whether any background process has terminated/been suspended, either normally or due to a signal. The last pieces of functionality I added were implementing the "fg", and "bg" commands. For "bg", I simply found the inputted job from the job list and sent the child a signal to resume it. For "fg", I send the inputted child process a signal to resume it, and also waited for its termination/suspension, either normally or with a signal.
						<br/>
						<br/>
						I think this project was exciting for me since it was the first long-term (we had around a month to complete it) project that I had done in a CS class, and it was a project that I could see being practically implemented in the real world.
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default ShellPage;