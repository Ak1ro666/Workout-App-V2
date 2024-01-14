import { useParams } from 'react-router-dom'
import { useUpdateWorkout } from '../hooks/useUpdateWorkout'
import { useQuery } from '@tanstack/react-query'
import { WorkoutService } from '../../../services/workout/workout.service'

export const useExerciseItem = ({ exerciseLog }) => {
	const { id } = useParams()
	const { updateIsCompleted } = useUpdateWorkout()
	const { data, isSuccess } = useQuery(
		['get all workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const completeUpdateIsCompeted = () => {
		const findWorkout =
			isSuccess && data.find(workout => workout.id === Number(id))
		const findExercise = findWorkout.exercisesIds.map(ex => {
			// eslint-disable-next-line
			if (ex.value === exerciseLog.value) {
				return { ...ex, isCompleted: !ex.isCompleted }
			}
			return ex
		})
		updateIsCompleted({ exercisesIds: findExercise })
	}

	return { completeUpdateIsCompeted }
}
