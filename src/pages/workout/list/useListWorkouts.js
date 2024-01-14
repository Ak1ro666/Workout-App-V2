import { useMemo } from 'react'
import { useMyProfile } from '../../../hooks/useMyProfile'
import { useQuery } from '@tanstack/react-query'
import { WorkoutService } from '../../../services/workout/workout.service'

export const useListWorkouts = () => {
	const { data: myProfileData } = useMyProfile()

	const {
		data: workout = [],
		isLoading,
		isSuccess,
		isError: errorCompleted
	} = useQuery(['get all workouts'], () => WorkoutService.getAll(), {
		select: ({ data }) => data
	})

	const filteredWorkouts = workout
		.filter(workout => workout?.user?.email === myProfileData?.email)
		.map(workout => ({
			id: workout.id,
			name: workout.name,
			exercisesIds: workout.exercisesIds,
			isCompleted: workout.isCompleted
		}))

	return useMemo(
		() => ({
			filteredWorkouts,
			isLoading,
			isSuccess,
			errorCompleted
		}),
		[filteredWorkouts, isLoading, isSuccess, errorCompleted]
	)
}
