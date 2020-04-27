import React from 'react'
import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection_styles'

import CollectionItem from '../../components/collection-item/colection-item'


import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selector'


const CollectionPage = ({ match, collection }) =>{
	const {title, items}  = collection	
	return(
	<CollectionPageContainer>	
		<CollectionTitle>{title}</CollectionTitle>
		<CollectionItemsContainer>
		{
			items.map( item => (
				<CollectionItem key={item.id} item={item} />
		))}
		</CollectionItemsContainer>
	</CollectionPageContainer>
	)
}

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps.match)
	return({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})}

export default connect(mapStateToProps)(CollectionPage)