import React from 'react'
import { SearchingPanel } from './SearchingPanel/SearchingPanel'
import { AllFriends } from './AllFriends/AllFriends'
import './MainPage.scss'

export const MainPage = ({
	sortFriends,
	getFilter,
	getSort,
	handleChange,
	value,
	filter,
	sorts,
	sort,
	friends,
	clickId,
	isFetching,
	searchBy,
	filterBy,
}) => (
	<>
		<SearchingPanel
			sortFriends={sortFriends}
			getFilter={getFilter}
			getSort={getSort}
			handleChange={handleChange}
			value={value}
			filter={filter}
			sorts={sorts}
			sort={sort}
		/>
		<AllFriends
			friends={friends}
			clickId={clickId}
			isFetching={isFetching}
			searchBy={searchBy}
			filterBy={filterBy}
		/>
	</>
)
