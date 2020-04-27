import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { SelectIsCollectionLoaded } from '../../redux/shop/shop-selector'
import Spinner from '../../components/spinner/spinner'
import CollectionsOverview from './collections-overview.js'


const mapStateToProps = createStructuredSelector({
	isLoading: state => !SelectIsCollectionLoaded(state)
})


const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	Spinner)
	(CollectionsOverview)



export default CollectionsOverviewContainer	