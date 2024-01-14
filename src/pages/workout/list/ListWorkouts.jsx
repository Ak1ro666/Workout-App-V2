import { Fragment } from 'react'

import styles from '../detail/Workout.module.scss'

import { Layout, Loader } from '../../../components'
import Alert from '../../../components/ui/alert/Alert'

import WorkoutItem from './WorkoutItem'

import { useListWorkouts } from './useListWorkouts.js'

const ListWorkouts = () => {
	const { filteredWorkouts, isLoading, isSuccess, errorCompleted } =
		useListWorkouts()

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{errorCompleted && <Alert type='error' text={errorCompleted} />}
					{isLoading && !isSuccess ? (
						<div className='loader'>
							<Loader />
						</div>
					) : (
						<div className={styles['wrapper']}>
							<>
								{filteredWorkouts?.map((workout, index) => (
									<Fragment key={index}>
										<WorkoutItem workout={workout} />
									</Fragment>
								))}
							</>
						</div>
					)}
					{isSuccess && filteredWorkouts && filteredWorkouts.length === 0 && (
						<div className='loader'>
							<Alert type='warning' text='Workouts not found' />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default ListWorkouts
