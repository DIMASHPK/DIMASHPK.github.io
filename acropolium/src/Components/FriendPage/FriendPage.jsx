import React from 'react'
import { NavLink } from 'react-router-dom'
import './FriendPage.scss'

export const FriendPage = ({ friend }) => (
	<>
		{friend && (
			<section className={'friendPage'}>
				<div className='container'>
					<h2 className={'friendPage__title'}>Friend Page</h2>
					<div className='row'>
						<div className='col-lg-3 col-md-3'>
							<img
								className={'friendPage__avatar'}
								src={friend.image}
								alt='avatar'
								title={'avatar'}
							/>
						</div>
						<div className='col-lg-6 col-md-6'>
							<div className='friendPage__info'>
								<h3 className={'friendPage__name'}>
									{friend.name ? friend.name : 'unknown'}
								</h3>
								<p className={'friendPage__info'}>
									gender: {friend.gender ? friend.gender : 'unknown'}
								</p>
								<p className={'friendPage__info'}>
									house:{' '}
									{friend.location.name ? friend.location.name : 'unknown'}
								</p>
								<p className={'friendPage__info'}>
									species: {friend.species ? friend.species : 'unknown'}
								</p>
								<p className={'friendPage__info'}>
									created:{' '}
									{friend.created
										? new Date(friend.created).toLocaleDateString()
										: 'unknown'}
								</p>
								<p className={'friendPage__info'}>
									alive: {`${friend.status ? friend.status : 'unknown'}`}
								</p>
								<NavLink className={'friendPage__link'} to={'/'}>
									Main page
								</NavLink>
							</div>
						</div>
						<div className='col-lg-12'>
							<p className={'friendPage__text'}>
								Whenever I am asked to explain the appeal of “Rick and Morty,” I
								propose a thought experiment.
								<br />
								Imagine that you grew up with the world’s tragedies being beamed
								into your living room by 24-hour cable news. Your country has
								been at war for much your lifetime. You graduated college with a
								huge amount of debt, and you entered the work force during the
								recent financial crisis. Imagine, too, that the world’s
								ecological crisis weighs heavily on your mind and that you spend
								as much time on the internet as you do speaking to real human
								beings.
								<br />
								If you were this sort of person, what television show would
								resonate with you?
								<br />
								“Rick and Morty,” the Adult Swim animated comedy by Justin
								Roiland and Dan Harmon, just might be the answer.
								<br />
								It is dark, even to the point of being nihilistic; it is
								absurdist; and it operates less like a novel or serial drama and
								more like a meme or internet video. It also speaks to the sense
								of alienation, anxiety and skepticism that it not uncommon among
								younger Americans today.
								<br />
								And it has just been renewed for 70 episodes. Adult Swim
								announced last week that as a part of an overall deal with the
								series creators, “Rick and Morty,” which numbers 31 episodes in
								its first three seasons, will return for more than double that
								number.
							</p>
						</div>
					</div>
				</div>
			</section>
		)}
	</>
)
