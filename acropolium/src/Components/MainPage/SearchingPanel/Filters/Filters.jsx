import React from 'react'

const filters = [
	{ id: 1, name: 'default' },
	{ id: 2, header: 'Filter by status' },
	{ id: 3, name: 'alive' },
	{ id: 4, name: 'death' },
	{ id: 5, name: 'status unknown' },
	{ id: 6, header: 'Filter by gender' },
	{ id: 7, name: 'female' },
	{ id: 8, name: 'male' },
]

export const Filters = ({
	toggleFilters,
	visibleFilters,
	applyFilter,
	filter,
}) => (
	<div
		className={`panel__features filters ${visibleFilters ? 'noRadius' : ''}`}
	>
		<div className='panel__activeFeatures' onClick={() => toggleFilters()}>
			filters by{filter ? ` ${filter}` : '...'}
		</div>
		{visibleFilters && (
			<div className='panel__chooseFeatures'>
				{filters.map(({ id, header, name }) =>
					header ? (
						<p className={'panel__featuresHeader'} key={id}>
							{header}
						</p>
					) : (
						<div
							className='panel__chooseFeature'
							key={id}
							onClick={() => applyFilter(name)}
						>
							{name}
						</div>
					)
				)}
			</div>
		)}
	</div>
)
