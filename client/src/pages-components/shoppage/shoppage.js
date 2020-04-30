import React, {useEffect, lazy, Suspense} from 'react'
import {Route} from 'react-router-dom'

import {connect} from 'react-redux'
import { fetchCollectionsStart  } from '../../redux/shop/shop-actions'
import BaseSpinner from '../../components/spinner/spinner-base'


const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview-container.js'))
const CollectionContainer = lazy(() => import('../collection/collection-container.js'))



const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<BaseSpinner />}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
      </Suspense>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage)