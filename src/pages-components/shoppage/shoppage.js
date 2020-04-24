import React from 'react'
import SHOP_DATA from './shoppagecontent.js'
import PreViewCollection from '../../components/preview/preview.js'


class ShopPage extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			colections: SHOP_DATA

		}
	}

	render(){
		const {colections} = this.state
		return (
				<div className='shop-page'>
					{
						colections.map(({id, ...otherColectionProps}) => (
							<PreViewCollection key={id}  {...otherColectionProps}/>
				))}
				</div>
				)
	}

}

export default ShopPage