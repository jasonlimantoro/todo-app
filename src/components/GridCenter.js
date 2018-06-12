import React from 'react';
import PropTypes from 'prop-types';

const GridCenter = ({children}) => ( 
	<div className="container">
		<div className="row my-flex-container justify-content-center">
			{children}
		</div>
	</div>
);

GridCenter.propTypes = {
	children : PropTypes.node.isRequired,
}

export default GridCenter;