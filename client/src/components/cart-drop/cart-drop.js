import React from 'react'
import {CartDropContainer, CartItemsContainer, EmptyMessageContainer, CartDropButton} from './cart-drop_styles'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-action'



const CartDrop = ({cartItems, history, dispatch}) => (
	<CartDropContainer>
		<CartItemsContainer>
		{	cartItems.length ?
			cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
			:
			<EmptyMessageContainer >Your card is empty</EmptyMessageContainer>
		}
		</CartItemsContainer>
		<CartDropButton onClick={() => {
			history.push('/checkout')
			dispatch(toggleCartHidden())
		}}>GO TO CHECKOUT</CartDropButton>
	</CartDropContainer>
	)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDrop))