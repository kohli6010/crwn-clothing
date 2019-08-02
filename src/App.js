import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/shop" component={Shop} />
		</Switch>
	);
}

export default App;
