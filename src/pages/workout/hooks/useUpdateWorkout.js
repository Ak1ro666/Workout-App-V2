import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { WorkoutService } from '../../../services/workout/workout.service'
import { useParams } from 'react-router-dom'

export const useUpdateWorkout = () => {
	const queryClient = useQueryClient()
	const { id } = useParams()

	const { mutate, isSuccess, isLoading, isError } = useMutation(
		['update exercise isCompleted'],
		body => WorkoutService.update(id, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get workout', id])
				queryClient.invalidateQueries(['get all workouts'])
			}
		}
	)

	return useMemo(
		() => ({ updateIsCompleted: mutate, isSuccess, isLoading, isError }),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isSuccess, isLoading, isError]
	)
}
