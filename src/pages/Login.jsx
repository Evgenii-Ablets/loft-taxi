import React from 'react'
import { BigButton } from '../components/Button'
import { Sideheader } from '../components/Sideheader'
import './Login.css'

export const Login = (props) => {
  return (
    <>
    <Sideheader />
    <form className='inputBox'>
      <legend className='title'>Войти</legend>
      <label className='emailInput' htmlFor='email'>Email</label>
      <input id='email' type='email' name='email' placeholder='mail@mail.ru*'/>
      <div id='line1'></div>
      <label className='passwordInput' htmlFor='password'>Пароль</label>
      <input id='password' type='password' name='password' placeholder='*******'/>
      <div id='line2'></div>
      <div className='remindPass'>
        <span>Забыли пароль?</span>
      </div>
      <BigButton className='loginButton' navigate={props.navigate} page={'map'} text={'Войти'}/>
      <div className='bottomText'>
      <span>Новый пользователь?</span>
      <button className='buttonRegistration' onClick={() => {props.navigate('registration')}}>Зарегистрироваться</button>
    </div>
    </form>
    </>
  )
}