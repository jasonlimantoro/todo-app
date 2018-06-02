import React from "react";
import PropTypes from "prop-types";

export const Button = ({disabled, onClickFilter, bsStyle, children}) => (
	<button
		className={`btn btn-${bsStyle}`}
		disabled={disabled}
		onClick={onClickFilter}
	>
		{children}
	</button>
);

Button.propTypes = {
	disabled: PropTypes.bool.isRequired,
	onClickFilter: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};
