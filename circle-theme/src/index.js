import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter,
  Switch,
  Route,
	Redirect,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {
	CSSTransition,
	TransitionGroup
} from 'react-transition-group';

import ErrorPage from './pages/404-page.js';
import LandingPage from './pages/landing-page.js';
import WorkPage from './pages/work-page.js';
import AboutPage from './pages/about-page.js';
import SeniorEditionPage from './pages/work-pages/senior-edition-page.js';
import MixrPage from './pages/work-pages/mixr-page.js';
import AromaPage from './pages/work-pages/aroma-page.js';
import PhotographyPage from './pages/work-pages/photography-page.js';
import RedesignPage from './pages/work-pages/redesign-page.js';
import ShellPage from './pages/work-pages/shell-page.js';
import StoicPage from './pages/work-pages/stoic-page.js';

import ResumePage from './pages/resume-page.js';

function App() {
	return (
		<div className="app">
		
			<Route render={({location}) =>  (
				<TransitionGroup>
				<CSSTransition 
					key={location.key}
					timeout={800} 
					classNames="fade">

					<Switch location={location}>
						<Route exact path="/" component={LandingPage}/>
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/work" component={WorkPage} />
						<Route exact path="/work/mixr" component={MixrPage} />
						<Route exact path="/work/aroma" component={AromaPage} />
						<Route exact path="/work/shell" component={ShellPage} />
						<Route exact path="/work/stoic" component={StoicPage} />
						<Route exact path="/work/photography" component={PhotographyPage} />
						<Route exact path="/work/senioredition" component={SeniorEditionPage} />
						<Route exact path="/work/collegeboard" component={RedesignPage} />
		
						<Route exact path="/resume" component={ResumePage} />
		
						<Route exact component={ErrorPage}/>
					</Switch>

				</CSSTransition>
				</TransitionGroup>
			)}/>
		
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
