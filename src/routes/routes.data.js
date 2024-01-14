import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import NewExercise from '../pages/new-exercise/NewExercise'
import NewWorkout from '../pages/new-workout/NewWorkout'
import Profile from '../pages/profile/Profile'
import Workout from '../pages/workout/detail/Workout'
import ListWorkouts from '../pages/workout/list/ListWorkouts'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	}
]
