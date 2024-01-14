import { useQuery } from '@tanstack/react-query'
import { ExerciseService } from '../../services/exercise/exercise.service'

export const useListExercise = () =>
	useQuery(['get all exercises'], () => ExerciseService.getAll(), {
		select: ({ data }) => data
	})
