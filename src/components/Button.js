import React from "react";
import PropTypes from "prop-types";

export const Button = ({disabled, onClickFilter, children}) => (
	<button
		className="btn btn-secondary"
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
