import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/SignUpAndSignIn/SignUpAndSignIn.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsubscribe = null;

	componentDidMount() {
		
		// looking for the changes for Authentication 👩‍🔧
		this.unsubscribe = auth.onAuthStateChanged(async (user) => {

			// getting a reference query object from firebase 😝
			const userRef = await createUserProfileDocument(user);
			if (user) {

				// getting a snapshot object from user reference from firebase 📗
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				this.setState({
					currentUser: user
				});
			}
		});
	}

	componentWillUnmount() {
		
		// will stop data to leak 📢
		this.unsubscribe();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/signin" component={SignUpAndSignIn} />
				</Switch>
			</div>
		);
	}
}

export default App;
