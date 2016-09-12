import React from 'react';

import SignUpButton from './signupButton';
import FbSignInButton from './fbsigninButton';

export default class UserInput extends React.Component{
	render(){
		const styleVar = {
			color: '#fff'
		}
		return(
			<div class="row center-align">
				<div class="col l12 m12 s12">
					<SignUpButton />					
				</div>
				<div class="col l12 m12 s12">
					<FbSignInButton />
				</div>
					<div class="col l12 m12 s12">
						<p style={styleVar}>Already have an account? Please <a href="#!">Sign In </a></p>
					</div>
			</div>
		);
	}
}