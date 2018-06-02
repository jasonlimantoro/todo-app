import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/TodoActions";
import { Button } from "../components/Button";


const mapStateToProps = (state, ownProps) => ({
	disabled : state.visibilityFilter === ownProps.filter,
	bsStyle : ownProps.filter === 'SHOW_ALL' ? 'secondary'
					: ownProps.filter === 'SHOW_COMPLETED' ? 'success'
					: ownProps.filter === 'SHOW_INCOMPLETED' ? 'warning'
					:	ownProps.filter === 'SHOW_ACTIVE' ? 'primary'
					:																			'light'
					
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
