import { useNavigate } from 'react-router-dom'
import styles from '../detail/Workout.module.scss'

// eslint-disable-next-line
const WorkoutItem = ({ workout }) => {
	const navigate = useNavigate()

	return (
		<div className={styles['item']}>
			<button
				aria-label='Create new workout'
				// eslint-disable-next-line
				onClick={() => navigate(`/workout/${workout?.id}`)}
			>
				{/* eslint-disable-next-line */}
				<span>{workout?.name}</span>
			</button>
		</div>
	)
}

export default WorkoutItem
