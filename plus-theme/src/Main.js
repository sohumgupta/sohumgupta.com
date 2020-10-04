import * as React from 'react';

import {
	Switch,
	Route,
} from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ResumePage from './Pages/ResumePage/ResumePage';

class Main extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/about" component={AboutPage}/>
				<Route exact path="/resume" component={ResumePage}/>
				<Route component={MainPage} />
			</Switch>
		);
	}
}

export default Main;