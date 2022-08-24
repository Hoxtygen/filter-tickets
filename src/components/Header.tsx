import React from 'react'
import { ChildrenProp } from '../types'

export default function Header({children}:ChildrenProp) {
  return (
	<header className='header'>
		<div className="header-inner">
			{children}
		</div>
	</header>
  )
}
