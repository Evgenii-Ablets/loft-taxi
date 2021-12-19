import React from 'react'
import { Sideheader } from '../components/Sideheader'
import { BigButton } from '../components/Button'
import './Registration.css'

export const Registration = (props) => {
  return (
    <>
    <Sideheader />
    <form className='inputBox'>
      <legend className='title'>Регистрация</legend>
      <label className='emailInputR' htmlFor='email'>Email</label>
      <input id='emailR' type='email' name='email' placeholder='mail@mail.ru*'/>
      <div id='line1R'></div>
      <label className='nameInput' name='username'>Как Вас зовут?</label>
      <input id='username' type='username' name='username' placeholder='Иван Иванович'/>
      <div id='line2R'></div>
      <label className='passwordInputR' htmlFor='password'>Придумайте пароль</label>
      <input id='passwordR' type='password' name='password' placeholder='*******'/>
      <div id='line3R'></div>
      <BigButton className='loginButton' navigate={props.navigate} page={'map'} text={'Зарегистрироваться'}/>
      <div className='bottomText'>
      <span>Уже зарегестрированы?</span>
      <button className='buttonRegistration' onClick={() => {props.navigate('login')}}>Войти</button>
    </div>
    </form>
    </>
  )
}