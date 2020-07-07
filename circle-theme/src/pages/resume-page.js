import React from 'react';
import './resume-page.scss';

class Resume extends React.Component {
	render() {
		return (
			<main class="wrapper">
				<article className="resume">
					<section className="grid-area header">
						<div className="header-left">sohum gupta</div>
						<div className="header-right">
							W: sohumgupta.com
							<br/>
							G: github.com/sohumgupta
							<br/>
							P: (630) 397-1796
							<br/>
							E: sohum_gupta@brown.edu
							<br/>
						</div>
					</section>
			
					<section className="grid-area education">
						<h1 className="title">education</h1>
					</section>
					<section className="grid-area skills">
						<h1 className="title">skills</h1>
					</section>
					<section className="grid-area courses">
						<h1 className="title">courses</h1>
						<ul>
							<li>Functional Programming</li>
							<li>Data Structures and Algorithms</li>
							<li>User Interfaces and User Experiences</li>
							<li>Intro to Computer Systems</li>
							<li>Intro to Statistics and Probability</li>
							<li>Honors Linear Algebra</li>
							<li>Honors Multivariable Calculus</li>
						</ul>
					</section>
					<section className="grid-area interests">
						<h1 className="title">interests</h1>
					</section>
			
					<section className="grid-area experience">
						<h1 className="title">experience</h1>
					</section>
					<section className="grid-area activities">
						<h1 className="title">activities</h1>
					</section>
					<section className="grid-area projects">
						<h1 className="title">projects</h1>
					</section>
				</article>
			</main>
		);
	}
}

export default Resume;