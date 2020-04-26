import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.js'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.js'


const ShopPage = ({ match })  =>(
  <div className='shop-page'>
  	<Route path={`${match.path}:collectionId`} component={CollectionPage} />
    <Route exact path={`${match.path}`} component={CollectionsOverview} />    
  </div>
)

export default ShopPage