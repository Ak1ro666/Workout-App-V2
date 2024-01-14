import cn from 'classnames'

import { Header, Loader } from '../../components'

import stylesLayout from '../../components/layout/Layout.module.scss'
import { useMyProfile } from '../../hooks/useMyProfile'
import styles from './Profile.module.scss'
import Statistics from './statistics/Statistics'

const Profile = () => {
	const { data, isLoading } = useMyProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/images/header/user.svg'
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					<div>
						<div className={styles['heading']}>Before</div>
						<img
							src='/images/before.jpg'
							alt='before'
							draggable={false}
							style={{ borderRadius: '14px' }}
						/>
					</div>
					<div>
						<div className={styles['heading']}>After</div>
						<img
							src='/images/after.jpg'
							alt='after'
							draggable={false}
							style={{ borderRadius: '14px' }}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
