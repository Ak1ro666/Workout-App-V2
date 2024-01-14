import axios from 'axios'
import Cookies from 'js-cookie'
import { API_URL, TOKEN } from '../app.constants'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
