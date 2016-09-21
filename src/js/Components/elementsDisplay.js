import React from 'react';

import TypeAnimation from './typeAnimation';
import LogoDisplay from './logoDisplay';

export default class ElementsDisplay extends React.Component{
	render(){
		return(
			<div class="elementsDisplay">
				<div class="row center-align">
					<LogoDisplay />
					<div class="col l12 m12 s12 center-align">
						<h1 class="textLoginColor">Dead simple way 
						<br></br>to rate&nbsp;<TypeAnimation /> </h1>
					</div>
				</div>
			</div>
		);
	}
}