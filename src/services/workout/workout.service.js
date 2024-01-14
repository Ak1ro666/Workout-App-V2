import { $axios } from '../../api'

export const WorkoutService = {
	async getAll() {
		return $axios.get('/workouts')
	},
	async getById(id) {
		return $axios.get(`/workouts/${id}`)
	},
	async create(body) {
		return $axios.post('/workouts', body)
	},
	async update(id, body) {
		return $axios.patch(`/workouts/${id}`, body)
	},
	async delete(id) {
		return $axios.delete(`/workouts/${id}`)
	}
}
