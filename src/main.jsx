import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './providers/authProvider'
import Router from './routes/Router'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
