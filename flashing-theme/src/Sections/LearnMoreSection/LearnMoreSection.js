import * as React from 'react';
import './LearnMoreSection.scss';

import { MdArrowDropDown } from 'react-icons/md';

class LearnMoreSection extends React.Component {
	render() {
		return (
			<div className="learn-more-wrapper">
				<div className="learn-more" onClick={this.props.onClick}>
					<p className="learn-more-text">Learn More</p>
					<p className="learn-more-icon"><MdArrowDropDown/></p>
				</div>
			</div>
		)
	}
}

export default LearnMoreSection;