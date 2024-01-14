import { Fragment } from 'react'

import styles from './Workout.module.scss'

import HeaderWorkout from './HeaderWorkout'

import ExerciseItem from './ExerciseItem'
import { useWorkout } from './useWorkout'
import { Button, Loader } from '../../../components'
import Alert from '../../../components/ui/alert/Alert'

const Workout = () => {
	const {
		isSuccess,
		isLoading,
		workout,
		errorCompleted,
		times,
		completeWorkout
	} = useWorkout()

	return (
		<>
			<HeaderWorkout times={times} isSuccess={isSuccess} workout={workout} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0, position: 'relative' }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{errorCompleted && <Alert type='error' text={errorCompleted} />}
					{isLoading ? (
						<div className='loader'>
							<Loader />
						</div>
					) : (
						<div className={styles['wrapper']}>
							<>
								{workout.exercisesIds.map((exerciseLog, index) => (
									<Fragment key={index}>
										<ExerciseItem exerciseLog={exerciseLog} />
									</Fragment>
								))}
								{workout.exercisesIds.every(ex => ex.isCompleted === true) && (
									<Button clickHandler={() => completeWorkout()}>
										Завершить тренировку
									</Button>
								)}
							</>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Workout
