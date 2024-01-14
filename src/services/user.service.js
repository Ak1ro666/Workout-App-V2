import { API_URL } from '../../app.constants'
import { $axios } from '../api'

export const UserService = {
	async getProfile() {
		return $axios.get('/profile')
	},
	async getMyProfile() {
		return $axios.get(`${API_URL}/auth_me`)
	}
}
