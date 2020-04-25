import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDrop from '../../components/cart-drop/cart-drop'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectCartHidden } from '../../redux/cart/cart-selectors'


const Header = ({ currentUser, hidden }) => (
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
			<CartIcon />
		</div>
		{
			hidden ? null : <CartDrop />
		}
	 </div>
	)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)