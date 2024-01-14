import React from 'react'
import styles from './HamburgerMenu.module.scss'

import { RiMenu3Fill } from 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri'

import Menu from './Menu'

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div className={styles['wrapper']}>
			<button aria-label='open menu' onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <RiCloseLine size={36} /> : <RiMenu3Fill size={28} />}
			</button>
			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default HamburgerMenu
