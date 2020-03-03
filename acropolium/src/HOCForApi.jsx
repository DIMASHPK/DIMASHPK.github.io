import React from 'react'
import { withRouter } from 'react-router-dom'
import App from './App'

const HOCForApi = Component =>
	class GetAPI extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				friends: [],
				page: 1,
				isFetching: true,
			}
		}

		getFriends = async () => {
			try {
				this.setState({ isFetching: true })

				let request = await fetch(
					`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${this.state.page}`
				)
				let res = await request.json()
				res = res.results
				this.setState({
					friends: [...this.state.friends, ...res],
					page: this.state.page + 1,
				})
				setTimeout(() => this.setState({ isFetching: false }), 2000)
			} catch {
				this.setState({ isFetching: false })
				alert(
					'Sorry something went wrong! Please refresh page and check your internet connection'
				)
			}
		}

		getFriendsOnScroll = () => {
			let scrollHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			)
			let pageOffset = window.pageYOffset + window.innerHeight
			let {
				location: { pathname },
			} = this.props

			if (
				pageOffset === scrollHeight &&
				this.state.page < 6 &&
				this.state.page > 1 &&
				!pathname.includes('friend')
			) {
				this.getFriends()
			}
		}

		getFriendswithoutScroll = () => {
			const timer = setInterval(() => {
				let {
					location: { pathname },
				} = this.props
				let scrollHeight = Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight,
					document.body.clientHeight,
					document.documentElement.clientHeight
				)
				if (this.state.page > 1) {
					!pathname.includes('friend') &&
						window.innerHeight === scrollHeight &&
						this.getFriends()
				}
				if (this.state.page > 5) {
					clearInterval(timer)
				}
			}, 200)
		}

		async componentDidMount() {
			this.getFriends()
			window.addEventListener('scroll', this.getFriendsOnScroll)
			this.getFriendswithoutScroll()
		}

		render() {
			return <Component {...this.state} />
		}
	}

export const FriendsWithUrlData = withRouter(HOCForApi(App))
