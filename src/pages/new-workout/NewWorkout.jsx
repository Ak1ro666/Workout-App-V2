import { Link } from 'react-router-dom'
import { Button, Field, Layout, Loader } from '../../components'
import Alert from '../../components/ui/alert/Alert'
import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isSuccess,
		error,
		isLoading,
		onSubmit
	} = useNewWorkout()

	return (
		<>
			<Layout
				bgImage='/images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && (
					<div className='loader'>
						<Loader />
					</div>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.exercise?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
