import React from 'react';
import './expand-circle-button.scss';

class expandCircleButton extends React.Component {
	render() {
		return (
			<a href={this.props.url} className="expand-circle">
				<span>{this.props.text}</span>
				<svg width="13px" height="10px" viewBox="0 0 13 10" style={{stroke: this.props.color}}>
					<path d="M1,5 L11,5"></path>
					<polyline points="8 1 12 5 8 9"></polyline>
				</svg>
			</a>
		);
	}
	
	static defaultProps = {
		url: "#",
		text: "click me",
		color: "black"
	}
}

export default expandCircleButton;