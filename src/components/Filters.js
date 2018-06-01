import React from "react";
import ButtonGroup from "../components/ButtonGroup";
import { FilterButton } from "../containers/FilterButton";

const Filters = ()  => (
	<div>
		Filters: {" "}
		<ButtonGroup>
			<FilterButton filter="SHOW_ALL">
				All
			</FilterButton>
			<FilterButton filter="SHOW_COMPLETED">
				Completed
			</FilterButton>
			<FilterButton filter="SHOW_INCOMPLETED">
				Incompleted
			</FilterButton>
		</ButtonGroup>
	</div>
);

export default Filters;
