import styles from './Header.module.scss'

import { useLocation, useNavigate } from 'react-router-dom'

import { FaRegUser } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'

import { Hamburger } from '../..'
import { useAuth } from '../../../hooks/useAuth'

// eslint-disable-next-line react/prop-types
const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	return (
		<header className={styles['header']}>
			{pathname !== '/auth' ? (
				<>
					{pathname !== '/' ? (
						<button aria-label='Go back' onClick={() => navigate(backLink)}>
							<IoArrowBackOutline />
						</button>
					) : (
						<button aria-label='Authorization or registration' onClick={() => navigate(isAuth ? '/profile' : '/auth')}>
							<FaRegUser />
						</button>
					)}
					<Hamburger />
				</>
			) : (
				''
			)}
		</header>
	)
}

export default Header
