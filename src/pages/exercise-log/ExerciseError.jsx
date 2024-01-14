import Alert from '../../components/ui/alert/Alert'

// eslint-disable-next-line
const ExerciseError = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{/* eslint-disable-next-line */}
			{errors.map((error, index) => (
				<Alert key={error + index} type='error' text={error} />
			))}
		</div>
	)
}

export default ExerciseError
