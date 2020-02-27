import React from 'react'
import { Search } from './Search/Search'
import { Sorts } from './Sorts/Sorting'
import { Filters } from './Filters/Filters'
import './SearchingPanel.scss'

export const SearchingPanel = ({
	sortFriends,
	getFilter,
	getSort,
	handleChange,
	value,
	filter,
	sorts,
	sort,
}) => {
	let [visibleSort, setVisibleSort] = React.useState(false)
	let [visibleFilters, setVisibleFilters] = React.useState(false)

	const toggleSortingFilter = () => setVisibleSort(!visibleSort)
	let toggleFilters = () => setVisibleFilters(!visibleFilters)

	const applySort = name => {
		getSort(name)
		sortFriends()
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
						<Sorts
							toggleSortingFilter={toggleSortingFilter}
							applySort={applySort}
							visibleSort={visibleSort}
							sorts={sorts}
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
