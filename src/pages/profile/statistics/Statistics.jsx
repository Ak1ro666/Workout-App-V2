import styles from './Statistics.module.scss'
import { useStatistics } from './useStatistics'

const Statistics = () => {
	const { statistics, isSuccess } = useStatistics()

	return (
		<div className={styles.wrapper}>
			{isSuccess &&
				statistics?.map(statistic => (
					<div key={statistic.label} className={styles.count}>
						<div className={styles['heading']}>{statistic.label}</div>
						<div className={styles['number']}>{statistic.value}</div>
					</div>
				))}
		</div>
	)
}

export default Statistics
