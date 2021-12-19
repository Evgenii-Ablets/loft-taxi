import React from 'react'
import './Header.css'
import { LoftLogo } from './LoftLogo'

export const Header = (props) => {
  return (
    <header className='topHeader'>
      <div className='LoftLogoHeader'>
        <LoftLogo />
      </div>
      <div className='LoftTextHeader'>
        <p className='loft'>loft<span className='taxi'>taxi</span></p>
      </div>
      <nav>
        <ul>
          <li>
            <button 
            onClick={() => {
              props.navigate('map')
            }}>
              Карта
            </button>
          </li>
          <li>
            <button 
            onClick={() => {
              props.navigate('profile')
            }}>
              Профиль
            </button>
          </li>
          <li>
            <button 
            onClick={() => {
              props.navigate('login')
            }}>
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}