import * as React from 'react';

import {
	Switch,
	Route,
} from "react-router-dom";

import {
	CSSTransition,
	TransitionGroup
} from 'react-transition-group';

import './Main.scss';

import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ResumePage from './Pages/ResumePage/ResumePage';

class Main extends React.Component {
	render() {
		return (
			<Route render={({location}) =>  (
				<TransitionGroup>
				<CSSTransition 
					key={location.key}
					timeout={1000} 
					classNames="swipe">

					<Switch location={location}>
						<Route exact path="/" component={MainPage}/>
						<Route exact path="/about" component={AboutPage}/>
						<Route exact path="/resume" component={ResumePage}/>
						<Route component={MainPage} />
					</Switch>

				</CSSTransition>
				</TransitionGroup>
			)}/>
		)
	}
}

export default Main;