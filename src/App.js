import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
)

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/shop/hats" component={HatsPage} />
		</Switch>
	);
}

export default App;
