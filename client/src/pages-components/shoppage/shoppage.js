import React, {useEffect} from 'react'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container.js'
import {Route} from 'react-router-dom'
import CollectionContainer from '../collection/collection-container.js'
import {connect} from 'react-redux'
import { fetchCollectionsStart  } from '../../redux/shop/shop-actions'





const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage)