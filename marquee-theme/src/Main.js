import * as React from 'react';

import {
	Switch,
	Route,
} from "react-router-dom";

import {
	CSSTransition,
	TransitionGroup
} from 'react-transition-group';

import MainPage from './Pages/MainPage/MainPage';
import AdmiralPage from './Pages/ProjectPages/AdmiralPage';
import TwistMuseumPage from './Pages/ProjectPages/TwistMuseumPage';

class Main extends React.Component {
	render() {
		return (
			<Route render={({location}) =>  (
				<TransitionGroup>
				<CSSTransition 
					key={location.key}
					timeout={800} 
					classNames="fade">
	
					<Switch location={location}>
						<Route exact path="/" component={MainPage}/>
						<Route exact path="/twistmuseum" component={TwistMuseumPage} />
						<Route exact path="/admiral" component={AdmiralPage} />
					</Switch>
	
				</CSSTransition>
				</TransitionGroup>
			)}/>
		);
	}
}

export default Main;