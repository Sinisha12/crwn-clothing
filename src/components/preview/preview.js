import React from 'react'
import {CollectionPreviewContainer, TitleContainer, PreviewContainer} from './preview_styles'
import CollectionItem from '../collection-item/colection-item.js'


const PreViewCollection = ({ title, items }) => (
	<CollectionPreviewContainer>
		<TitleContainer>{title.toUpperCase()}</TitleContainer>
		<PreviewContainer>
			{ 
				items.filter((item, index) => index<4 )
				.map((item) => (<CollectionItem key={item.id} item={item} />))
			}
		</PreviewContainer>
	</CollectionPreviewContainer>
	)


export default PreViewCollection