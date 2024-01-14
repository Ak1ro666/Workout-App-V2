import React from 'react'

import styles from './HamburgerMenu.module.scss'

import { Link } from 'react-router-dom'
import { menu } from './menu.data'

import cn from 'classnames'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../../app.constants'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import { useAuth } from '../../../hooks/useAuth'

import { useNavigate } from 'react-router-dom'

const Menu = ({ isOpen, setIsOpen }) => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsOpen(false)

		navigate('/auth')
	}
	const ref = React.useRef()
	useOnClickOutside(ref, () => setIsOpen(false))

	return (
		<nav
			ref={ref}
			className={cn(styles['menu'], {
				[styles['show']]: isOpen
			})}
		>
			<ul>
				{menu.map(el => (
					<li key={el.title}>
						<Link to={isAuth ? el.link : '/auth'}>{el.title}</Link>
					</li>
				))}
				{isAuth ? (
					<li>
						<button onClick={logoutHandler}>Logout</button>
					</li>
				) : (
					''
				)}
			</ul>
		</nav>
	)
}

export default Menu
