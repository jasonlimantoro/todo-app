import { connect } from "react-redux";
import { toggle, remove } from "../actions/TodoActions";
import { getVisibleTodos } from "../reducers/Reducer";
import TodoList from '../components/TodoList';


const mapStateToProps = state => ({
	todos : getVisibleTodos(state, state.visibilityFilter) 
});

// no need
// const mapDispatchToProps = (dispatch) => ({
// 	toggle: (id) => dispatch(toggle(id))
// });

export default connect(
	mapStateToProps,
	{toggle, remove},
) (TodoList);
