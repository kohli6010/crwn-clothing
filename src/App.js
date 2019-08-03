import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/SignUpAndSignIn/SignUpAndSignIn.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/signin" component={SignUpAndSignIn} />
			</Switch>
		</div>
	);
}

export default App;
