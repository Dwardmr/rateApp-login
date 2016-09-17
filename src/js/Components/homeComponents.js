import React from 'react';

import ElementsDisplay from './elementsDisplay';
import UserInput from './userInput';

export default class HomeComponents extends React.Component {

	render(){
		return(
			<div class="home_Components">
				<ElementsDisplay />
				<UserInput />
			</div>
		);
	}
}