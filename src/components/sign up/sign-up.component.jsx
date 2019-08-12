import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';
import './sign-up.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	render() {
		return (
			<div>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form action="" onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
