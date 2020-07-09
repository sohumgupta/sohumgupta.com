import * as React from 'react';
import './MarqueeSection.scss';

class MarqueeSection extends React.Component {
	render() {
		const marqueeStyle = this.props.resize ? {
			width: '100vw',
			height: '90vh'
		} : {
			width: '90vh',
			height: '100vw',
			left: 'calc((100vw - 90vh)/2)',
			top: 'calc((90vh - 100vw)/2)',
			transform: 'rotate(-90deg)'
		}

		const backwardsStyle = this.props.resize ? "" : " upside-down"

		return (
			<div className="marquee-wrapper" style={marqueeStyle}>
				<div className="marquee-line">
					{ Array(8).fill(<p className="marquee-text">Brown University '22</p>) }
				</div>
				<div className="marquee-line backwards">
					{ Array(8).fill(<p className={"marquee-text" + backwardsStyle}>Computer Science</p>) }
				</div>
			</div>
		)
	}
}

MarqueeSection.defaultProps = {
	direction: "vertical"
}

export default MarqueeSection;