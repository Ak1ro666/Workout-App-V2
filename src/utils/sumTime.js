export const sumTime = ({ exercisesIds = [] }) => {
	let times = exercisesIds?.reduce((sum, exercise) => sum + exercise.times, 0)

	return { times }
}
