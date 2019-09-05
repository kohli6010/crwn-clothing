import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/SignUpAndSignIn/SignUpAndSignIn.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscribe = null;

	componentDidMount() {
		// looking for the changes for Authentication 👩‍🔧
		this.unsubscribe = auth.onAuthStateChanged(async (user) => {
			// getting a reference query object from firebase 😝
			const userRef = await createUserProfileDocument(user);
			if (user) {
				// getting a snapshot object from user reference from firebase 📗
				userRef.onSnapshot((snapShot) => {
					console.log(snapShot);
					this.props.setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				this.props.setCurrentUser(user);
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
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/signin" component={SignUpAndSignIn} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
