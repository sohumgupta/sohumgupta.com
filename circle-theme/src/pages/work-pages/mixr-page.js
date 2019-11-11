import React from 'react';
import './mixr-page.scss';

import ExpandCircleButton from '../../assets/expand-circle-button.js';
import Circles from '../../assets/circles.js';

import Navbar from '../../assets/navbar.js';
import Footer from '../../assets/footer.js';
import WorkHeader from '../../assets/work-header.js';

import MIXRHeader from '../../images/mixr/mixrheader.png';
import MainPage from '../../images/mixr/main-screen.png';
import PlaylistPage from '../../images/mixr/playlist-screen.png';

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
					<WorkHeader image={MIXRHeader} name="MIXR" descrip="Created for Hack@Brown 2019" technologies={["HTML", "CSS", "PHP", "JavaScript", "Spotify API"]}/>
					<div className="content">
						They say "write about what you know". Usually, this doesn't apply to writing code, but when it came to my project for Hack@Brown 2019, my friends and I decided to roll with what we know.
						<br/><br/>
						What we know, then, is music. My friends and I listen to a lot of music. A lot of our relationship is based on showing music to each other, and to be quite honest, it's what a lot of us initially bonded over. So when we sat down at a table on the cold Saturday morning in February, a lot of our ideas seemed to be about the thing we knew best. We started brainstorming ideas about what we wanted in an app, and eventually, we converged to one idea:
						<br/><br/>
						<mark className="bold">A place where we could create playlists that everyone would enjoy, while also being able to find new music for ourselves.</mark>
						<br/><br/>
						So we decided to make <mark className="bold">Mixr</mark>. Mixr is a webapp where you can log in with your Spotify and post your public playlists to nearby users, allowing them to add music to your playlists, or where you could browse nearby playlists and add your own music.
						<div className="picture">
							<img src={MainPage} className="picture-image"/>
							<p className="picture-caption">The main screen included a list of playlists that you could scroll through.</p>
						</div>
						Each playlist page includes the title of the playlist, along with a description, a song request form, and an embedded Spotify player with all the songs in the playlist. We originally wanted the color of the beaker to change based on certain statistics of the songs in the playlist that we could pull from Spotify using their API (hence the name Mixr), but my group ran out of time, and were unable to implement that.
						<div className="picture">
							<img src={PlaylistPage} className="picture-image"/>
							<p className="picture-caption">Here is an example of a playlist screen with one of my playlists!</p>
						</div>
						When a request was made, we made a request to the Spotify API to add the first song from the search results (using the inputed artist name and track name) to the user's playlist. We also wanted to implement a sort of PIN system, where users could choose to protect their playlists behind a PIN, such that users could only add to the playlist if they had the PIN (but could still request songs otherwise). The idea behind this was that users could create playlists for parties or get-togethers, and could announce the PIN at the event, such that people at the event could add songs without allowing anyone to add their songs.
						<br/><br/>
						Personally, I worked mostly on the front-end for the website, but also helped with some of the server-side and Spotify API integration. As my first hackathon project, it was a bit overwhelming, but I had a lot of fun working with a team and creating a project that I would actually use.
					</div>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default MixrPage;