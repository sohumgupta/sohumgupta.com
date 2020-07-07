import React from 'react';
import './work-page.scss';

import ExpandCircleButton from '../assets/expand-circle-button.js';
import Circles from '../assets/circles.js';

import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import WorkCard from '../assets/work-card.js';

import SeniorEdition from '../images/main/graphicdesign.png';
import Mixr from '../images/main/mixrhome.png';
import Aroma from '../images/main/aromahome.png';
import Shell from '../images/main/shell.png';
import Stoic from '../images/main/stoic.png';
import Photography from '../images/main/photography.png';
import Collegeboard from '../images/main/collegeboard.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

const cards = [
	{ name: "Stoic Design", image: Stoic, page: "/work/stoic", technologies: ["Adobe Suite"], tags: ["Design"] },
	{ name: "MIXR", image: Mixr, page: "/work/mixr", technologies: ["HTML/CSS", "Javascript", "PHP"], tags: ["Design", "Full-Stack"]  },
	{ name: "Shell", image: Shell, page: "/work/shell", technologies: ["C"], tags: ["Systems"] },
	{ name: "Aroma", image: Aroma, page: "/work/aroma", technologies: ["MongoDB", "React", "Node.js/Express.js"], tags: ["Design", "Full-Stack"] },
	{ name: "Collegeboard Redesign", image: Collegeboard, page: "/work/collegeboard", technologies: ["Adobe Suite", "HTML/CSS"], tags: ["Design"]},
	{ name: "Senior Edition", image: SeniorEdition, page: "/work/senioredition", technologies: ["Adobe Suite"], tags: ["Design"] },
	{ name: "Film Photography", image: Photography, page: "/work/photography", technologies: [], tags: ["Hobbies"] },
];

class FilterButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}
	
	toggleActive() {
		this.props.filter();
		//this.setState({active: !this.state.active});
	}
	
	getName() {
		return this.props.text;
	}
	
	render() {
		return (
			<button onClick={this.toggleActive.bind(this)} className={this.state.active ? "filter-button pushed" : "filter-button"}>{this.props.text}</button>
		);
	}
}

class WorkPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
			x: 0, y: 0, 
			redirect: false, 
			newURL: "",
			tags: [],
			tech: []
		};
  }

  _onMouseMove(e) {
   this.setState({ x: e.screenX, y: e.screenY });
  }
	
	getAllTags() {
		var ret = [];
		for (let i = 0; i < cards.length; i++) {
			for (let j = 0; j < cards[i].tags.length; j++) {
				if (!ret.includes(cards[i].tags[j])) {
					ret.push(cards[i].tags[j]);
				}
			}
		}
		return ret;
	}
	
	getAllTech() {
		var ret = [];
		for (let i = 0; i < cards.length; i++) {
			for (let j = 0; j < cards[i].technologies.length; j++) {
				if (!ret.includes(cards[i].technologies[j])) {
					ret.push(cards[i].technologies[j]);
				}
			}
		}
		return ret;
	}
	
	filterCards() {
		var filteredTags = cards;
		
		if (this.state.tags.length > 0) {
			filteredTags = [];
			for (var i = 0; i < this.state.tags.length; i++) {
				for (var j = 0; j < cards.length; j++) {
					if (cards[j].tags.includes(this.state.tags[i])) {
						filteredTags.push(cards[j]);
					}
				}
			}
		}
		
		var filtered = filteredTags;
		if (this.state.tech.length > 0) {
			filtered = [];
			for (var i = 0; i < this.state.tech.length; i++) {
				for (var j = 0; j < cards.length; j++) {
					if (cards[j].tags.includes(this.state.tags[i])) {
						filteredTags.push(cards[j]);
					}
				}
			}
		}
		
		return filtered;
	}
	
	toggleTech(name, t) {
		var tech = t.state.tech;
		if (tech.includes(name)) {
  		let newTech = tech.filter(item => item !== name);
    	t.setState({tech: newTech});
		} else {
			let newTech = tech.push(name);
			t.setState({tech: newTech});
		}
	}
	
	toggleTag(name, t) {
		var tags = t.state.tags;
		if (tags.includes(name)) {
  		let newTags = tags.filter(item => item !== name);
    	t.setState({tags: newTags});
		} else {
			let newTags = tags.push(name);
			t.setState({tags: newTags});
		}
		console.log(name);
	}
	
	render() {
		console.log(this.state.tags);
		
		const allTags = this.getAllTags().map((t) => <FilterButton text={t} filter={() => this.toggleTag(t, this)}/>);
		const allTech = this.getAllTech().map((t) => <FilterButton text={t} filter={() => this.toggleTech(t, this)}/>);
																					
		const renderedCards = this.filterCards().map((c) => <WorkCard name={c.name} image={c.image} page={c.page}/>);
																								 
		return (
			<div id="body">
				<div id="work-page" onMouseMove={this._onMouseMove.bind(this)}>
					<Navbar opacity={0}></Navbar>
					{/*
					<div id="filters">
						<h1>Tags</h1>
						{allTags}
						<h1>Technologies</h1>
						{allTech}
					</div>
					*/}
					<div id="work-container">
						{renderedCards}
					</div>
					<Circles x={this.state.x} y={this.state.y}></Circles>
					<Footer></Footer>
				</div>
			</div>
		);
	}
	
	static defaultProps = {
	}
}

export default WorkPage;