import styles from './Auth.module.scss'

import { Button, Field, Layout, Loader } from '../../components'

import Alert from '../../components/ui/alert/Alert'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const {
		errors,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
		setType,
		error
	} = useAuthPage()

	return (
		<div style={{ maxWidth: '560px', width: '100%', margin: '0 auto' }}>
			<Layout heading='Auth || Register' bgImage='/images/auth-bg.png'></Layout>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text='Error during registration' />}
				<form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
					{isLoading && (
						<div className='loader'>
							<Loader />
						</div>
					)}
					<Field
						error={errors?.email?.message}
						type='text'
						placeholder='Enter email'
						register={register}
						name='email'
						options={{
							required: 'Email is required'
						}}
					/>
					<Field
						error={errors?.password?.message}
						type='password'
						placeholder='Enter password'
						register={register}
						name='password'
						options={{
							required: 'Password is required'
						}}
					/>
					<div className={styles['wrapper-buttons']}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Register</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Auth
