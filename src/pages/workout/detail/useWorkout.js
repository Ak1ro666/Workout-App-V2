import { useNavigate, useParams } from 'react-router-dom'
import { sumTime } from '../../../utils/sumTime'
import { WorkoutService } from '../../../services/workout/workout.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useWorkout = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const {
		data: workout = [],
		isSuccess,
		isLoading,
		isError: errorCompleted
	} = useQuery(['get workout', id], () => WorkoutService.getById(id), {
		select: ({ data }) => data
	})

	const { mutate: completeWorkout, isLoading: isLoadingDeleted } = useMutation(
		['delete workout', id],
		() => {
			WorkoutService.delete(id)
		},
		{
			onSuccess: () => {
				navigate('/workouts')
			}
		}
	)

	const { times } = sumTime(workout)

	return useMemo(
		() => ({
			isSuccess,
			isLoading,
			workout,
			errorCompleted,
			times,
			completeWorkout,
			isLoadingDeleted
		}),
		[
			isSuccess,
			isLoading,
			workout,
			errorCompleted,
			times,
			completeWorkout,
			isLoadingDeleted
		]
	)
}
