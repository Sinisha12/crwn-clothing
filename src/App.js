import React from 'react';
import './App.css';
import HomePage from './pages-components/homepage/homepage_component.js'
import ShopPage from './pages-components/shoppage/shoppage.js'
import { Switch, Route } from 'react-router-dom'





function App() {
  return (
  	<div>
  		<Switch>
  			<Route exact path='/' component={HomePage}/>
  			<Route path='/shop/' component={ShopPage}/>
  		</Switch>
  	</div>
  );
}

export default App;
