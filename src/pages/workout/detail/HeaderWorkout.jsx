import cn from 'classnames'

import stylesLayout from '../../../components/layout/Layout.module.scss'
import styles from './Workout.module.scss'

import { Header } from '../../../components'

// eslint-disable-next-line
const HeaderWorkout = ({ times, isSuccess, workout }) => {
	return (
		<div>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/workout-bg.jpg')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{`${times}  min.`}</time>
						{/* eslint-disable-next-line react/prop-types */}
						<h1 className={stylesLayout.heading}>{workout?.name}</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default HeaderWorkout
