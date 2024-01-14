import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { WorkoutService } from '../../services/workout/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exercisesIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({ ...data })
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			reset,
			control,
			isSuccess,
			error,
			isLoading,
			mutate,
			onSubmit
		}),
		[errors, isLoading, error, isSuccess]
	)
}
