import React from 'react'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header-styles'
import { ReactComponent as Logo } from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDrop from '../../components/cart-drop/cart-drop'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectCartHidden } from '../../redux/cart/cart-selectors'


const Header = ({ currentUser, hidden }) => (
	<HeaderContainer >
		<LogoContainer to="/" >
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop"> SHOP </OptionLink>
			<OptionLink to="/"> CONTACT </OptionLink>
			{
			currentUser ? 
			<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
			:
			<OptionLink to='/sign-in' >SIGN IN</OptionLink>
			}
			<CartIcon />
		</OptionsContainer>
		{
			hidden ? null : <CartDrop />
		}
	 </HeaderContainer>
	)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)