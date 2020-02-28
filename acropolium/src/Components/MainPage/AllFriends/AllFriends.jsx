import React from 'react'
import { Friend } from './Friend/Friend'
import { Preloader } from '../../Preloader/Preloader'
import './AllFriends.scss'

export const AllFriends = ({
	friends,
	isFetching,
	searchBy,
	filterBy,
	sortFriends,
}) => {
	let arrayOfFriends = friends
		.sort((a, b) => sortFriends(a, b))
		.filter(
			({ name, gender, status }) => filterBy(status, gender) && searchBy(name)
		)

	return (
		<section className={'allFriendsSection'}>
			<div className='container'>
				<h2 className={'allFriendsSection__title'}>All friends</h2>
				<div className='row'>
					{arrayOfFriends.length > 0 ? (
						arrayOfFriends.map(
							({ id, image, created, name, location, gender, status }) => (
								<React.Fragment key={id}>
									<Friend
										id={id}
										img={image}
										name={name}
										age={new Date(created).toLocaleDateString()}
										house={location.name}
										gender={gender}
										key={id}
										status={status}
									/>
								</React.Fragment>
							)
						)
					) : (
						<h3 className={'allFriendsSection__noSuchFriends'}>
							No such friends
						</h3>
					)}
				</div>
			</div>
			{isFetching && <Preloader />}
		</section>
	)
}
