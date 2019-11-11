import React from 'react';
import './mixr-page.scss';
import * as d3 from "d3";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Scatterplot extends Component {
	componentDidMount() {
    this.drawChart();
  }
	
	loadData() {
		d3.csv("cereal.csv", function(error, data) {
				// change string (from CSV) into number format
			data.forEach(function(d) {
				d.Calories = +d.Calories;
				d["Protein (g)"] = +d["Protein (g)"];
			});
		}
	
	drawChart() {
		
	}
}