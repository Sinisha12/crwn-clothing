import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './pages-components/header/header.js'
import HomePage from './pages-components/homepage/homepage_component.js'
import ShopPage from './pages-components/shoppage/shoppage.js'
import SignInSignOut from './pages-components/sign-in-sign-up/sign-in-sign-up.js'
import { auth, createUserProfileDocument} from './firebase/firebase.util'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'




class  App extends React.Component  {
	unsubscribeFromAuth = null
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    	if (userAuth) {
    		const userRef = await createUserProfileDocument(userAuth);

    		userRef.onSnapshot(snapShot => {
        		setCurrentUser({
        			id: snapShot.id,
        			...snapShot.data()
          		});
        	});
      	}
    	setCurrentUser(userAuth);
    });
}


	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render () {  
		return (
			  	<div>
			  		<Header />
			  		<Switch>
			  			<Route exact path='/' component={HomePage}/>
			  			<Route path='/shop/' component={ShopPage}/>
			  			<Route path='/sign-in/' component={SignInSignOut}/>
			  		</Switch>
			  	</div>
    			);
			}
}


const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
