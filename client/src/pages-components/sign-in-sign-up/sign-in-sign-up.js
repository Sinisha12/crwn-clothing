import React from 'react'
import {SignInAndSignUpContainer} from './sign-in-sign-up_styles'
import SignIn from '../../components/sign-in/signin.js'
import SignUp from '../../components/sign-up/signup.js'




const SignInSignUp = () => (
	  <SignInAndSignUpContainer>
	    <SignIn />
	    <SignUp />
	  </SignInAndSignUpContainer>
	)



export default SignInSignUp