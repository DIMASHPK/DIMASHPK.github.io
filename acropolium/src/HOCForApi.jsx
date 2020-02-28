import React from 'react'
import App from './App'

const HOCForApi = Component =>
	class GetAPI extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				friends: [],
				defaultFriends: [],
				page: 2,
				isFetching: true,
			}
		}

		getFriends = async () => {
			let request = await fetch(
				'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'
			)
			let res = await request.json()
			res = res.results
			this.setState({
				friends: [...res],
				defaultFriends: [...res.map(res => ({ ...res }))],
			})
			setTimeout(() => this.setState({ isFetching: false }), 2000)
		}

		getMoreFriends = async () => {
			this.setState({ isFetching: true })

			let request = await fetch(
				`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${this.state.page}`
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

		getMoreFriendsOnScroll = () => {
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
				this.getMoreFriends()
			}
		}

		getMoreFriendswithoutScroll = () => {
			const timer = setInterval(
				() =>
					this.state.page < 6
						? window.innerHeight === document.body.scrollHeight &&
						  this.getMoreFriends()
						: clearInterval(timer),
				200
			)
		}

		async componentDidMount() {
			this.getFriends()
			window.addEventListener('scroll', this.getMoreFriendsOnScroll)
			this.getMoreFriendswithoutScroll()
		}

		render() {
			return <Component {...this.state} />
		}
	}

export default HOCForApi(App)
