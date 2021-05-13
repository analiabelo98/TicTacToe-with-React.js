import React from "react";
import PropTypes from "prop-types";

const Square = props => {
	return (
		<div className={"col-4 " + props.value} onClick={props.onClick}></div>
	);
};

Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};
export default Square;
