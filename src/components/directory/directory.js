import React from 'react'
import {DirectoryMenu} from './directory_styles'
import MenuItem from '../menu_item/menu_item.js'
import {connect} from 'react-redux'
import {createStructuredSelector} from  'reselect'
import {selectDirectorySections} from '../../redux/directory/directory-selector'

const Directory =({sections}) => (
		<DirectoryMenu>
		{sections.map(({id, ...otherSectionProps}) =>
			(<MenuItem key={id} {...otherSectionProps}/>))}
		</DirectoryMenu>
)


const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)