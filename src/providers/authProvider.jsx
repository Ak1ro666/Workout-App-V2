import Cookies from 'js-cookie'
import React from 'react'
import { createContext } from 'react'
import { TOKEN } from '../../app.constants'

export const AuthContext = createContext({})

// eslint-disable-next-line
const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = React.useState(!!Cookies.get(TOKEN))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
