import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import { withAuth } from './AuthContext'
import { BigButton } from '../components/Button'
import { Sideheader } from '../components/Sideheader'
import './Login.css'

export class Login extends Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
  return (
    <>
    {this.props.isLoggedIn ? (
      this.props.navigate('map')
    ) : (
      <>
    <Sideheader />
    <form className='inputBox' onSubmit={this.authenticate}>
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
      <BigButton type="submit" className='loginButton' navigate={this.props.navigate} page={'map'} text={'Войти'}/>
      <div className='bottomText'>
      <span>Новый пользователь?</span>
      <button className='buttonRegistration' onClick={() => {this.props.navigate('registration')}}>Зарегистрироваться</button>
    </div>
    </form>
    </>
    )}
    </>
  )}
}
Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);
