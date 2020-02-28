import React from 'react'
import { Search } from './Search/Search'
import { Sorts } from './Sorts/Sorting'
import { Filters } from './Filters/Filters'
import { ResetButton } from './ResetButton/ResetButton'
import './SearchingPanel.scss'

export const SearchingPanel = ({
	getFilter,
	getSort,
	handleChange,
	value,
	filter,
	sort,
	resetAll,
}) => {
	let [visibleSort, setVisibleSort] = React.useState(false)
	let [visibleFilters, setVisibleFilters] = React.useState(false)

	const toggleSortingFilter = () => setVisibleSort(!visibleSort)
	let toggleFilters = () => setVisibleFilters(!visibleFilters)

	const applySort = name => {
		getSort(name)
		toggleSortingFilter(false)
	}

	const applyFilter = filter => {
		toggleFilters(false)
		getFilter(filter)
	}

	return (
		<section className='searchingSection'>
			<div className='container'>
				<div className='row'>
					<div className='searchingSection__panel panel'>
						<Search handleChange={handleChange} value={value} />
						<ResetButton resetAll={resetAll} />
						<Sorts
							toggleSortingFilter={toggleSortingFilter}
							applySort={applySort}
							visibleSort={visibleSort}
							sort={sort}
						/>
						<Filters
							toggleFilters={toggleFilters}
							visibleFilters={visibleFilters}
							applyFilter={applyFilter}
							filter={filter}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
