import React from 'react'

import styles from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '15px' }}>
			<input
				{...register(name, options)}
				{...rest}
				className={styles['input']}
			/>
			<div>{error && <div className={styles['error']}>{error}</div>}</div>
		</div>
	)
}

export default Field
