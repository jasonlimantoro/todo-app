import React from "react";
import PropTypes from "prop-types";

const ButtonGroup = ({ children, style, vertical }) => (
  <div className={`btn-group${vertical ? '-vertical' : ''}`} role="group" aria-label="button-filter" style={style}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonGroup;
