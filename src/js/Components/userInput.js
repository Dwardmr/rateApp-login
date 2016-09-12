import React from 'react';

import SignUpButton from './signupButton';
import FbSignInButton from './fbsigninButton';

export default class UserInput extends React.Component{
	render(){
		return(
			<div class="UserInput">
				<div class="row center-align">
					<SignUpButton />					
				</div>
				<div class="row center-align">
					<FbSignInButton />
				</div>
					<div class="row center-align">
						<div class="col l12 m12 s12">
							<p class="signIn-Text">Already have an account? Please <a href="#!">Sign In </a></p>
						</div>
					</div>
			</div>
		);
	}
}