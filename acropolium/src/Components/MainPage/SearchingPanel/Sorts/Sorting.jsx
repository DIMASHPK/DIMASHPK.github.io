import React from 'react'

const sorts = [
	{ id: 1, name: 'default' },
	{ id: 2, header: 'Sorting by name' },
	{ id: 3, name: 'name ascending' },
	{ id: 4, name: 'name descending' },
	{ id: 5, header: 'Sorting by age' },
	{ id: 6, name: 'age ascending' },
	{ id: 7, name: 'age descending' },
]

export const Sorts = ({
	toggleSortingFilter,
	applySort,
	visibleSort,
	sort,
}) => (
	<div className={`panel__features sorts ${visibleSort ? 'noRadius' : ''}`}>
		<div
			className='panel__activeFeatures'
			onClick={() => toggleSortingFilter()}
		>
			sorting by{sort ? ` ${sort}` : '...'}
		</div>
		{visibleSort && (
			<div className='panel__chooseFeatures'>
				{sorts.map(({ id, header, name }) =>
					header ? (
						<p className={'panel__featuresHeader'} key={id}>
							{header}
						</p>
					) : (
						<div
							className='panel__chooseFeature'
							key={id}
							onClick={() => {
								applySort(name)
							}}
						>
							{name}
						</div>
					)
				)}
			</div>
		)}
	</div>
)
