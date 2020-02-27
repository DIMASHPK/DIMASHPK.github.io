import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { MainPage } from './Components/MainPage/MainPage'
import { FriendPage } from './Components/FriendPage/FriendPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Assets/Fonts/Fonts.scss'
import './App.scss'

const sorts = [
	{ id: 1, name: 'default' },
	{ id: 2, name: 'name ascending' },
	{ id: 3, name: 'name descending' },
	{ id: 4, name: 'age ascending' },
	{ id: 5, name: 'age descending' },
]

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			friends: [],
			defaultFriends: [],
			search: '',
			filter: '',
			sort: '',
			id: 0,
			isFetching: true,
			page: 2,
		}
	}

	handleChange = ({ target: { value } }) => this.setState({ search: value })

	searchBy = name => name.includes(this.state.search)

	getFilter = filter => this.setState({ filter: filter })

	filterBy = (status, gender) => {
		switch (this.state.filter) {
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

	getSort = sort => this.setState({ sort: sort })

	sortFriends = () => {
		switch (this.state.sort) {
			case 'name ascending':
				return this.setState({
					friends: this.state.friends.sort((a, b) =>
						a.name > b.name ? -1 : 1
					),
				})
			case 'name descending':
				return this.setState({
					friends: this.state.friends.sort((a, b) =>
						a.name > b.name ? 1 : -1
					),
				})
			case 'age ascending':
				return this.setState({
					friends: this.state.friends.sort((a, b) =>
						a.created > b.created ? -1 : 1
					),
				})
			case 'age descending':
				return this.setState({
					friends: this.state.friends.sort((a, b) =>
						a.created > b.created ? 1 : -1
					),
				})
			default:
				return this.setState({
					friends: this.state.defaultFriends.map(res => ({ ...res })),
				})
		}
	}

	getId = id =>
		this.setState({
			id: this.state.friends.findIndex(friend => friend.id === id),
		})

	getMoreFriendsOnScroll = async () => {
		let scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		)

		let pageOffset = window.pageYOffset + window.innerHeight

		if (pageOffset === scrollHeight && this.state.page < 6) {
			this.setState({ isFetching: true })

			let request = await fetch(
				`https://rickandmortyapi.com/api/character/?page=${this.state.page}`
			)
			let res = await request.json()
			res = res.results
			this.setState({
				friends: [...this.state.friends, ...res],
				defaultFriends: [
					...this.state.defaultFriends,
					...res.map(res => ({ ...res })),
				],
				page: this.state.page + 1,
			})
			setTimeout(() => this.setState({ isFetching: false }), 2000)
		}
	}

	async componentDidMount() {
		let request = await fetch('https://rickandmortyapi.com/api/character/')
		let res = await request.json()
		res = res.results
		this.setState({
			friends: [...res],
			defaultFriends: res.map(res => ({ ...res })),
		})
		setTimeout(() => this.setState({ isFetching: false }), 2000)

		window.addEventListener('scroll', this.getMoreFriendsOnScroll)

		const timer = setInterval(
			() =>
				this.state.page < 6
					? window.innerHeight === document.body.scrollHeight &&
					  this.getMoreFriendsOnScroll()
					: clearInterval(timer),
			200
		)
	}

	render() {
		let { friends, filter, isFetching, sort } = this.state

		return (
			<>
				<header className='header'>
					<div className='container text-left'>
						<NavLink to='/' className='header__link'>
							<h1 className='header__title'>Myfriends </h1>
						</NavLink>
					</div>
				</header>
				<Switch>
					<Route
						path={`/friend/${this.state.id}`}
						render={() => (
							<FriendPage friend={this.state.friends[this.state.id]} />
						)}
					/>
					<Route
						path='/'
						render={() => (
							<MainPage
								sortFriends={this.sortFriends}
								getFilter={this.getFilter}
								getSort={this.getSort}
								handleChange={this.handleChange}
								value={this.state.value}
								filter={filter}
								sorts={sorts}
								sort={sort}
								friends={friends}
								clickId={this.getId}
								isFetching={isFetching}
								searchBy={this.searchBy}
								filterBy={this.filterBy}
							/>
						)}
					/>
				</Switch>
				<footer className='footer'>
					<div className='container'>
						<p className='footer__text'>copyright</p>
					</div>
				</footer>
			</>
		)
	}
}

export default App
