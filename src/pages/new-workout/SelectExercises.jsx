import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useMyProfile } from '../../hooks/useMyProfile'
import { useListExercise } from './useListExercise'

// eslint-disable-next-line
const SelectExercises = ({ control }) => {
	const { data = [] } = useListExercise()
	const { data: myProfileData } = useMyProfile()

	const filteredExercises = data
		.filter(exercise => exercise?.user?.email === myProfileData?.email)
		.map(exercise => ({
			value: exercise.id,
			label: exercise.name,
			imagePath: exercise.imagePath,
			times: exercise.times,
			isCompleted: exercise.isCompleted
		}))

	return (
		<>
			<Controller
				name='exercisesIds'
				control={control}
				render={({ field: { value, onChange } }) => (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={filteredExercises}
						value={value}
						onChange={onChange}
						isMulti
					/>
				)}
			/>
		</>
	)
}

export default SelectExercises
