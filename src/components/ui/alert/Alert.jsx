import cn from 'classnames'

import styles from './Alert.module.scss'

// eslint-disable-next-line
const Alert = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default Alert
