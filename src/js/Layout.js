import React from "react";

import HomeComponents from './Components/homeComponents';

export default class Layout extends React.Component {

	render() {
		return (
			<div class="imgBackground">
				<div class="opacityLayer">
					<HomeComponents />
				</div>
			</div>
    	);
  	}
}
