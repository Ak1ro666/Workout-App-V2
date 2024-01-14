import { Button, Layout } from '../../components'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import Statistics from '../profile/statistics/Statistics'
import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles['heading']}>
				EXERCISES FOR THE
				<br />
				SHOULDERS
			</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
