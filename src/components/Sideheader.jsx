import React from 'react'
import { LoftLogo } from '../components/LoftLogo'

export const Sideheader = () => {
  return (
    <header className='SideRectangle'>
    <div className='LoftLogoLogin'>
      <LoftLogo />
    </div>
    <div className='LoftText'>
      <p className='loft'>loft<span className='taxi'>taxi</span></p>
    </div>
  </header>
  )
}