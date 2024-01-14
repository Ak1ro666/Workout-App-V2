import { useQuery } from '@tanstack/react-query'
import { UserService } from '../services/user.service'

export const useMyProfile = () => {
	return useQuery(['get my profile'], () => UserService.getMyProfile(), {
		select: ({ data }) => data
	})
}
