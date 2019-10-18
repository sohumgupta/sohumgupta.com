import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page.js';
import WorkPage from './pages/work-page.js';

function App() {
	//return <LandingPage></LandingPage>;
	//return <WorkPage></WorkPage>
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={LandingPage}/>
				<Route path="/work" component={WorkPage} />
			</Switch>
		</div>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
