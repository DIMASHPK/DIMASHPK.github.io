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
	<BrowserRouter basename={'https://dimashpk.github.io/'}>
		<ScrollToTop />
		<HOCForApi />
	</BrowserRouter>,
	document.getElementById('root')
)
