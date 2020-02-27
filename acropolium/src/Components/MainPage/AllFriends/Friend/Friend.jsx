import React from 'react'
import { NavLink } from 'react-router-dom'
import './Friend.scss'

export const Friend = ({
	idForLink,
	id,
	img,
	name,
	age,
	house,
	gender,
	status,
	clickId,
}) => (
	<div className='col-lg-4 col-md-6'>
		<div className='friend' onClick={() => clickId(id)}>
			<NavLink className={'friend__link'} to={`/friend/${idForLink}`}>
				<div className='friend__avatarWrap'>
					<img
						className={'friend__avatar'}
						src={img}
						alt='avatar'
						title={'avatar of friend'}
					/>
				</div>
				<div className='friend__contentWrap'>
					<h3 className={'friend__name'}>{name}</h3>
					<p className={'friend__info'}>created: {age ? age : 'unknown'}</p>
					<p className={'friend__info'}>house: {house ? house : 'unknown'}</p>
					<p className={'friend__info'}>gender: {gender}</p>
					<p className={'friend__info'}>status: {status}</p>
				</div>
			</NavLink>
		</div>
	</div>
)
