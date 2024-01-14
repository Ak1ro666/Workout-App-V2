import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundPage from '../pages/not-found-page/NotFoundPage'
import { routes } from './routes.data'
import { useAuth } from '../hooks/useAuth'

const Router = () => {
	const { isAuth } = useAuth()

	const flatRoutes = routes.map(route => {
		if (route.isAuth && !isAuth) return false

		return {
			element: <route.component />,
			path: route.path
		}
	})

	const router = createBrowserRouter(
		flatRoutes.concat({
			element: <NotFoundPage />,
			path: '*'
		})
	)

	return <RouterProvider router={router} />
}

export default Router
