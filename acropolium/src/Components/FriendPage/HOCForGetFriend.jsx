import React from 'react'
import { withRouter } from 'react-router-dom'
import { FriendPage } from './FriendPage'

const HOCForGetFriend = Component =>
	class GetFriend extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				friend: {},
				isFetching: true,
			}
		}
		getFriend = async () => {
			let {
				location: { pathname },
			} = this.props

			let friendIndex = pathname.substr(
				Array.from(pathname.matchAll(/\//g))[1].index + 1
			)

			let request = await fetch(
				`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${friendIndex}`
			)
			let res = await request.json()

			this.setState({ friend: { ...res }, isFetching: false })
		}

		async componentDidMount() {
			this.getFriend()
		}

		render() {
			return <Component {...this.state} />
		}
	}

export const WithUrlDataWrapComponent = withRouter(HOCForGetFriend(FriendPage))
