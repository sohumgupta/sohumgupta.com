import * as React from 'react';
import './GooCircles.scss';

import Goo from 'gooey-react';

class GooCircles extends React.Component {
	render() {
		return (
			<Goo composite intensity="strong" className="goo-wrapper">
				{ Array(3).fill(<div className="goo-circle"/>) }
			</Goo>
		)
	}
}

export default GooCircles;