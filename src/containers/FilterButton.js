import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/TodoActions";
import { Button } from "../components/Button";


const mapStateToProps = (state, ownProps) => ({
	disabled : state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClickFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export const FilterButton = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);

FilterButton.propTypes = {
	filter : PropTypes.string.isRequired,
}
