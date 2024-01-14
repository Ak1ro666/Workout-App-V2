import cn from 'classnames'

import Header from './header/Header'

import { useCheckToken } from '../../hooks/useCheckToken'
import styles from './Layout.module.scss'
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	useCheckToken()

	const { pathname } = useLocation()

	return (
		<div
			className={cn(styles['wrapper'], {
				[styles['otherPage']]: !!heading
			})}
			style={{
				backgroundImage: `url(${bgImage})`,
				height: `${pathname === '/workouts' ? '356px' : ''}`
			}}
		>
			<Header backLink={backLink} />

			{heading && <h1 className={styles['heading']}>{heading}</h1>}

			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
