import React from "react";

import UserInput from './Components/userInput';
import ElementsDisplay from './Components/elementsDisplay';

export default class Layout extends React.Component {

	render() {
		return (
			<div class="imgBackground">
				<div class="opacityLayer">
					<ElementsDisplay />
					<UserInput />
				</div>
			</div>
    	);
  	}
}
