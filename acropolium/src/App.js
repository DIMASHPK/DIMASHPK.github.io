import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { MainPage } from './Components/MainPage/MainPage'
import { WithUrlDataWrapComponent } from './Components/FriendPage/HOCForGetFriend'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Assets/Fonts/Fonts.scss'
import './App.scss'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			filter: '',
			sort: '',
		}
	}
	handleChange = ({ target: { value } }) => this.setState({ value: value })

	getSort = sort => this.setState({ sort: sort })

	getFilter = filter => this.setState({ filter: filter })

	resetAll = () => this.setState({ value: '', filter: '', sort: '' })

	render() {
		let { friends, isFetching } = this.props
		let { value, filter, sort } = this.state

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
						path={'/friend/'}
						render={() => <WithUrlDataWrapComponent />}
					/>
					<Route
						path='/'
						render={() => (
							<MainPage
								friends={friends}
								isFetching={isFetching}
								value={value}
								handleChange={this.handleChange}
								sort={sort}
								getSort={this.getSort}
								filter={filter}
								getFilter={this.getFilter}
								resetAll={this.resetAll}
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
