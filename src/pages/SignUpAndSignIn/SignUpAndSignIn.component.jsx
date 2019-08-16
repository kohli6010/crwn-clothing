import React from 'react';
import LogIn from '../../components/login/login.component';
import SignUp from '../../components/signup/signup.component';
import './SignUpAndSignIn.styles.scss';

const SignUpAndSignIn = () => {
	return (
		<div className="sign-in-and-sign-up">
			<LogIn />
			<SignUp/>
		</div>
	);
};

export default SignUpAndSignIn;
