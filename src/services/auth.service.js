import Cookies from 'js-cookie'
import { TOKEN } from '../../app.constants'
import { $axios } from '../api'



export const AuthService = {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/${type}`, { email, password })

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}
