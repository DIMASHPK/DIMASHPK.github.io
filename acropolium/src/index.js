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
console.log(process.env.PUBLIC_URL)
ReactDOM.render(
	<BrowserRouter basename={'acropolium/build/'}>
		<ScrollToTop />
		<HOCForApi />
	</BrowserRouter>,
	document.getElementById('root')
)
