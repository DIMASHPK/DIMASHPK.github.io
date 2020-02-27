import React from 'react'
import './Search.scss'

export const Search = ({ handleChange, value }) => (
	<div className='panel__search'>
		<input
			className='panel__input'
			type='text'
			onChange={handleChange}
			value={value}
			placeholder={'chose filter and then enter value...'}
		/>
	</div>
)
