import React from 'react';
import './circles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Circles extends React.Component {
	render() {
		const dist = Math.sqrt(Math.pow(this.props.x, 2) + Math.pow(this.props.y, 2));
		
		const movement = .001;
		const gradient = .0002;
		
		//console.log(gradient*dist);
		
		const style1 = {
			top: (-10 - movement*dist) + "vw",
			left: (-10 - movement*dist) + "vw",
			backgroundImage: "linear-gradient(to bottom right, #FFBA9D, rgba(255, 186, 157, " + (.5 - gradient*dist) + ")",
		}
		
		const style2 = {
			bottom: (5 - movement*dist) + "vw",
			right: (5 - movement*dist) + "vw",
			backgroundImage: "linear-gradient(to top left, #FFBA9D, rgba(255, 186, 157, " + (gradient*dist) + ")",
		}
		
		return (
			<>
				<div id="circle-1" style={style1}></div>
				<div id="circle-2" style={style2}></div>
			</>
		);
	}
};

export default Circles;