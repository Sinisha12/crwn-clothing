import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './pages-components/header/header.js'
import HomePage from './pages-components/homepage/homepage_component.js'
import ShopPage from './pages-components/shoppage/shoppage.js'
import SignInSignOut from './pages-components/sign-in-sign-up/sign-in-sign-up.js'
import CheckoutPage from './pages-components/checkout/checkout'
import { auth, createUserProfileDocument} from './firebase/firebase.util'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selector'





class  App extends React.Component  {
	unsubscribeFromAuth = null
	componentDidMount() {
		const { setCurrentUser} = this.props;


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
			  		<Route path='/checkout' component={CheckoutPage} />
			  		<Route exact path='/sign-in/' render={() =>
			  		this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignOut />)}/>
			  	</Switch>
			</div>
    	);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser	
})


const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

