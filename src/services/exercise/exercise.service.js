import { $axios } from '../../api'

export const ExerciseService = {
	async getAll() {
		return $axios.get('/exercises')
	},
	async getById(id) {
		return $axios.get(`/exercises/${id}`)
	},
	async create(body) {
		return $axios.post('/exercises', body)
	},
	async update(id, body) {
		return $axios.patch(`/exercises/${id}`, body)
	},
	async delete(id) {
		return $axios.delete(`/exercises/${id}`)
	}
}
