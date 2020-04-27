import styled from 'styled-components';
import CustomButton from '../button/button'

export const  CartDropContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
`
export const  CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`

export const  EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 15px auto;
`

export const CartDropButton = styled(CustomButton)`
	margin-top: auto;
`
