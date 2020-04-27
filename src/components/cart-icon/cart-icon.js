import React from 'react'
import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from './cart-icon_styles'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-action'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'



const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIconContainer/>
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartIconContainer>
	)

const mapDispatchToProps = dispatch => ({
	toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
}) 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)






