import React from 'react';

import SignUpButton from './signupButton';
import FbSignInButton from './fbsigninButton';

export default class UserInput extends React.Component{
	render(){
		return(
			<div class="UserInput">
				<div class="row">
					<SignUpButton />					
				</div>
				<div class="row center-align">
					<FbSignInButton />
				</div>
				<div class="row center-align">
					<div class="col l12">
						<p class="textLoginColor">Already have an account? Please <a href="#!" class="signInButton">Sign In</a></p>
					</div>
				</div>
			</div>
		);
	}
}