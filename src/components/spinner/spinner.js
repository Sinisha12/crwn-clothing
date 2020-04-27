import React from 'react'
import {SpinnerOverlay, SpinnerContainer} from './spinner_styles'

const Spinner = WrappedCommponent => ({ isLoading, ...otherProps})  => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
		) : (
		<WrappedCommponent {...otherProps}/>
		)
}

export default Spinner