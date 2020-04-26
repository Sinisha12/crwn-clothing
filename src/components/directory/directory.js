import React from 'react'
import './directory.scss'
import MenuItem from '../menu_item/menu_item.js'
import {connect} from 'react-redux'
import {createStructuredSelector} from  'reselect'
import {selectDirectorySections} from '../../redux/directory/directory-selector'

const Directory =({sections}) => (
		<div className='directory-menu'>
		{sections.map(({id, ...otherSectionProps}) =>
			(<MenuItem key={id} {...otherSectionProps}/>))}
		</div>
)


const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)