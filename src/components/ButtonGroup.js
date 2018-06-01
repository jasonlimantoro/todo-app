import React from "react";
import PropTypes from "prop-types";

const ButtonGroup = ({ children, style}) => (
  <div className="btn-group" role="group" aria-label="button-filter" style={style}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonGroup;
