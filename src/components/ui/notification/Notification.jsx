import cn from 'classnames'

import styles from './Notification.module.scss'

// eslint-disable-next-line
const Notification = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default Notification
