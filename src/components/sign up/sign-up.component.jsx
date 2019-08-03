import React from 'react';
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
		e.preventDefault();
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
					<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
					<label htmlFor="email">Email</label>
					<input
						type="password"
						name="password"
						id="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<label htmlFor="password">Password</label>
					<button>Sign In</button>
				</form>
			</div>
		);
	}
}

export default SignIn;
