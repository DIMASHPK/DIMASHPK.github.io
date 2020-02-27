import React from 'react'
import { Friend } from './Friend/Friend'
import { Preloader } from '../../Preloader/Preloader'
import './AllFriends.scss'

export const AllFriends = ({
	friends,
	clickId,
	isFetching,
	searchBy,
	filterBy,
}) => (
	<section className={'allFriendsSection'}>
		<div className='container'>
			<h2 className={'allFriendsSection__title'}>All friends</h2>
			<div className='row'>
				{friends.map(
					({ id, image, created, name, location, gender, status }, i) => (
						<React.Fragment key={id}>
							{searchBy(name) && filterBy(status, gender) && (
								<Friend
									id={id}
									idForLink={i}
									img={image}
									name={name}
									age={new Date(created).toLocaleDateString()}
									house={location.name}
									gender={gender}
									key={id}
									clickId={clickId}
									status={status}
								/>
							)}
						</React.Fragment>
					)
				)}
			</div>
		</div>
		{isFetching && <Preloader />}
	</section>
)
