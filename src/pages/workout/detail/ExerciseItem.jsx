import cn from 'classnames'

import styles from './Workout.module.scss'
import { useExerciseItem } from './useExerciseItem'
import { useState } from 'react'
import Notification from '../../../components/ui/notification/Notification'

// eslint-disable-next-line
const ExerciseItem = ({ exerciseLog }) => {
	const { completeUpdateIsCompeted } = useExerciseItem({ exerciseLog })
	const [isComplete, setIsComplete] = useState(false)

	const onClickHandler = () => {
		completeUpdateIsCompeted()
		setTimeout(() => {
			setIsComplete(true)
		}, 500)
	}

	return (
		<div
			className={cn(styles.item, {
				// eslint-disable-next-line
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			{isComplete && <Notification text={'Exercise completed successfully!'} />}
			<button
				aria-label='Move to exercise'
				// eslint-disable-next-line react/prop-types
				onClick={() => onClickHandler()}
			>
				{/* eslint-disable-next-line react/prop-types */}
				<span>{exerciseLog?.label}</span>

				<img
					// eslint-disable-next-line react/prop-types
					src={exerciseLog?.imagePath}
					height='34'
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
