import * as React from 'react';
import './SectionHeader.scss';

class SectionHeader extends React.Component {
	render() {
		return (
			<div className={"section-header-wrapper" + " " + this.props.color} >
				<p>{this.props.section}</p>
				<p>{this.props.section}</p>
				<p>{this.props.section}</p>
			</div>
		)
	}
}

export default SectionHeader;