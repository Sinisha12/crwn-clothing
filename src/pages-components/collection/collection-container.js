import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { SelectIsCollectionLoaded } from '../../redux/shop/shop-selector'
import Spinner from '../../components/spinner/spinner'
import Collection from './collection.js'


const mapStateToProps = createStructuredSelector({
	isLoading: state => !SelectIsCollectionLoaded(state)
})


const CollectionContainer = compose(
	connect(mapStateToProps),
	Spinner)
	(Collection)



export default CollectionContainer	