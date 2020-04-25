import React from 'react'
import './cart-drop.scss'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../button/button'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-action'



const CartDrop = ({cartItems, history, dispatch}) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
		{	cartItems.length ?
			cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
			:
			<span className="empty-message">Your card is empty</span>
		}
		</div>
		<CustomButton onClick={() => {
			history.push('/checkout')
			dispatch(toggleCartHidden())
		}}>GO TO CHECKOUT</CustomButton>
	</div>
	)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDrop))
