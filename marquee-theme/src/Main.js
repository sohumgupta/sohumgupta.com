import * as React from 'react';

import {
	Switch,
	Route,
} from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage';
import AdmiralPage from './Pages/ProjectPages/AdmiralPage';
import TwistMuseumPage from './Pages/ProjectPages/TwistMuseumPage';

class Main extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/twistmuseum" component={TwistMuseumPage} />
				<Route exact path="/admiral" component={AdmiralPage} />
				<Route component={MainPage} />
			</Switch>
		);
	}
}

export default Main;