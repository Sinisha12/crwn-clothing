import React, {useEffect, lazy, Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import {GlobalStyles} from './global-styles'
import Header from './pages-components/header/header.js'
import BaseSpinner from './components/spinner/spinner-base'
import ErrorBoundary from './components/error-boundary/error-boundary'


import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selector'
import { checkUserSession } from './redux/user/user-actions'




const HomePage = lazy(() => import('./pages-components/homepage/homepage_component.js'))
const ShopPage = lazy(() => import('./pages-components/shoppage/shoppage.js'))
const SignInSignOut = lazy(() => import('./pages-components/sign-in-sign-up/sign-in-sign-up.js'))
const CheckoutPage = lazy(() => import('./pages-components/checkout/checkout'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<BaseSpinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/sign-in'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInSignOut />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser	
})

const mapStateToDispatch = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapStateToDispatch)(App);



