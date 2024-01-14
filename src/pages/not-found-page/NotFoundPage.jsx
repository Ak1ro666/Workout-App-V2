import { useEffect } from 'react'
import { Layout } from '../../components'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	useEffect(() => {
		if (!isAuth) navigate('/auth')
	}, [])

	return (
		<>
			<Layout heading='Page not found' />
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	)
}

export default NotFoundPage
