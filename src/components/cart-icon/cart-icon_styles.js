import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg'

export const CartIconContainer = styled.div`
	width: 50px;
	height: 50px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    bottom: 10px;
`

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 35px;
    height: 35px;
`