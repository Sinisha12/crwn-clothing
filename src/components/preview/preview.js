import React from 'react'
import './preview.scss'
import CollectionItem from '../collection-item/colection-item.js'


const PreViewCollection = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{ 
				items.filter((item, index) => index<4 )
				.map(({id, ...otherSection}) => (<CollectionItem key={id} {...otherSection} />))
			}
		</div>
	</div>
	)


export default PreViewCollection