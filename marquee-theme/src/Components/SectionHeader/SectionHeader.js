import * as React from 'react';
import './SectionHeader.scss';

class SectionHeader extends React.Component {
	render() {
		const colorStyle = " " + this.props.color
		return (
			<div className={"section-header-wrapper" + colorStyle}>
				<p>{this.props.section}</p>
				<p>{this.props.section}</p>
				<p>{this.props.section}</p>
			</div>
		)
	}
}

export default SectionHeader;