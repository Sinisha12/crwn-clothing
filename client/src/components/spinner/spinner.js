import React from 'react'
import BaseSpinner from './spinner-base'

const Spinner = WrappedCommponent => ({ isLoading, ...otherProps})  => {
	return isLoading ? (
		<BaseSpinner />
		) : (
		<WrappedCommponent {...otherProps}/>
		)
}

export default Spinner