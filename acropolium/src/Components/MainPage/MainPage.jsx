import React from 'react'
import { SearchingPanel } from './SearchingPanel/SearchingPanel'
import { AllFriends } from './AllFriends/AllFriends'
import './MainPage.scss'

export class MainPage extends React.Component {
	searchBy = name => name.includes(this.props.value)

	sortFriends = (a, b) => {
		const { sort } = this.props

		switch (sort) {
			case 'name ascending':
				return a.name > b.name ? -1 : 1
			case 'name descending':
				return a.name > b.name ? 1 : -1
			case 'age ascending':
				return a.created > b.created ? 1 : -1
			case 'age descending':
				return a.created > b.created ? -1 : 1
			default:
				return a.created > b.created ? 1 : -1
		}
	}

	filterBy = (status, gender) => {
		const { filter } = this.props

		switch (filter) {
			case 'alive':
				return status === 'Alive'
			case 'death':
				return status === 'Dead'
			case 'male':
				return gender === 'Male'
			case 'status unknown':
				return gender === 'unknown'
			case 'female':
				return gender === 'Female'
			default:
				return true
		}
	}

	render() {
		const {
			friends,
			isFetching,
			value,
			handleChange,
			sort,
			getSort,
			filter,
			getFilter,
			resetAll,
		} = this.props

		return (
			<>
				<SearchingPanel
					getFilter={getFilter}
					getSort={getSort}
					handleChange={handleChange}
					value={value}
					filter={filter}
					sort={sort}
					resetAll={resetAll}
				/>
				<AllFriends
					friends={friends}
					isFetching={isFetching}
					searchBy={this.searchBy}
					sortFriends={this.sortFriends}
					filterBy={this.filterBy}
				/>
			</>
		)
	}
}
