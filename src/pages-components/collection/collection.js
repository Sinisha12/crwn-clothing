import React from 'react'
import './collection.scss'

import CollectionItem from '../../components/collection-item/colection-item'

import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selector'


const CollectionPage = ({ match }) =>{
	console.log(match) 
	return(
	<h2>Collection PAGE</h2>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)