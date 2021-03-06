import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/SignUpAndSignIn/SignUpAndSignIn.component';
import CheckOut from './pages/checkout/checkout.component';
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
				console.log(this.props.user)
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
			<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.user ? <Redirect to="/" /> : <SignUpAndSignIn />)}
					/>}

					<Route exact path="/checkout" component={CheckOut} />
				</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
