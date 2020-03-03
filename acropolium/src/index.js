import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, useLocation } from 'react-router-dom'
import { FriendsWithUrlData } from './HOCForApi'

function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

ReactDOM.render(
	<HashRouter>
		<ScrollToTop />
		<FriendsWithUrlData />
	</HashRouter>,
	document.getElementById('root')
)
