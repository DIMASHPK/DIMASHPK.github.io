import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useLocation } from 'react-router-dom'

import HOCForApi from './HOCForApi'

function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<HOCForApi />
	</BrowserRouter>,
	document.getElementById('root')
)
