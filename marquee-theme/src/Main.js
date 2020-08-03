import * as React from 'react';

import {
	Switch,
	Route,
} from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage';

import AdmiralPage from './Pages/ProjectPages/AdmiralPage';
import TwistMuseumPage from './Pages/ProjectPages/TwistMuseumPage';
import AromaPage from './Pages/ProjectPages/AromaPage';
import ComicsPage from './Pages/ProjectPages/ComicsPage';
import OMRPage from './Pages/ProjectPages/OMRPage';

import ResumePage from './Pages/ResumePage/ResumePage';

class Main extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={MainPage}/>

				<Route exact path="/resume" component={ResumePage}/>

				<Route exact path="/twistmuseum" component={TwistMuseumPage} />
				<Route exact path="/admiral" component={AdmiralPage} />
				<Route exact path="/aroma" component={AromaPage} />
				<Route exact path="/comics" component={ComicsPage} />
				<Route exact path="/dailymidi" component={OMRPage} />

				<Route component={MainPage} />
			</Switch>
		);
	}
}

export default Main;