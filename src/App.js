import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './pages-components/header/header.js'
import HomePage from './pages-components/homepage/homepage_component.js'
import ShopPage from './pages-components/shoppage/shoppage.js'
import SignInSignOut from './pages-components/sign-in-sign-up/sign-in-sign-up.js'
import { auth } from './firebase/firebase.util'



class  App extends React.Component  {
	constructor(){
		super()
		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null


	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser:user})
			console.log(user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render () {  
		return (
			  	<div>
			  		<Header currentUser={this.state.currentUser}/>
			  		<Switch>
			  			<Route exact path='/' component={HomePage}/>
			  			<Route path='/shop/' component={ShopPage}/>
			  			<Route path='/sign-in/' component={SignInSignOut}/>
			  		</Switch>
			  	</div>
    			);
			}
}

export default App;
