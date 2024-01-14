import Cookies from 'js-cookie'
import { useAuth } from './useAuth'
import { TOKEN } from '../../app.constants'
import { useLocation } from 'react-router-dom'
import React from 'react'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	React.useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}
