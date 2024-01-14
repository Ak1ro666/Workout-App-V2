import { useMemo } from 'react'
import { useListWorkouts } from '../../workout/list/useListWorkouts'

export const useStatistics = () => {
	const { filteredWorkouts, isSuccess } = useListWorkouts()

	const times = filteredWorkouts
		.map(item => item.exercisesIds.reduce((sum, item) => sum + item.times, 0))
		.reduce((sum, item) => sum + item, 0)

	const calories = useMemo(() => {
		const sumCalories = times * 8 * filteredWorkouts.length

		const kgs = sumCalories / 900

		return kgs.toFixed(2)
	}, [times, filteredWorkouts.length])

	const statistics = [
		{
			label: 'Minutes',
			value: times
		},
		{
			label: 'Workout',
			value: filteredWorkouts.length
		},
		{
			label: 'Kgs',
			value: calories
		}
	]

	return { statistics, isSuccess }
}
