import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import './signup.styles.scss';

class SignUp extends React.Component { 
	constructor() { 
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async e => { 
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) { 
			alert(`Passwords do not match`);
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			createUserProfileDocument(user, {displayName});

		} catch (e) { 
			console.log(e);
		}

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		})
	}

	handleChange = (e) => { 
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() { 
		return (
			<div className="sign-up">
				<h2>I don't have an Account</h2>
				<span>Enter your credentials</span>
				<form action="" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={this.state.displayName}
						label="Enter Name"
						handleChange={this.handleChange}
						/>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						label="Enter Email"
						handleChange={this.handleChange}
					/>
						<FormInput
						type="password"
						name="password"
						value={this.state.password}
						label="Enter Password"
						handleChange={this.handleChange}
					/>
						<FormInput
						type="password"
						name="confirmPassword"
						value={this.state.confirmPassword}
						label="Confirm Password"
						handleChange={this.handleChange}
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp;