import React from 'react'
import './ResetButton.scss'

export const ResetButton = ({ resetAll }) => (
	<button className={'panel__resetButton'} onClick={resetAll}>
		Reset all
	</button>
)
