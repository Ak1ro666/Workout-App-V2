import styles from './Button.module.scss'

import cn from 'classnames'

// eslint-disable-next-line
const Button = ({ children, clickHandler = null, size = 'xl' }) => {
	return (
		<div className={styles['wrapper']}>
			<button
				className={cn(styles['button'], styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
