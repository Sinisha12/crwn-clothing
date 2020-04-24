import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.util'


const Header = ({ currentUser }) => (
	<div className='header'>
		<Link to="/" className='logo-container'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to="/shop"> SHOP </Link>
			<Link className='option' to="/"> CONTACT </Link>
			{
			currentUser ? 
			<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
			:
			<Link className='option' to='/sign-in' >SIGN IN</Link>
			}
		</div>
	 </div>
	)


export default Header