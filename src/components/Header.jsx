import React, { Component } from "react"
import { withAuth } from "../pages/AuthContext"
import './Header.css'
import { LoftLogo } from './LoftLogo'
import {PropTypes} from 'prop-types'

export class Header extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate("login");
  };

  render() {
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
                this.props.navigate('map')
              }}>
                Карта
              </button>
            </li>
            <li>
              <button 
              onClick={() => {
                this.props.navigate('profile')
              }}>
                Профиль
              </button>
            </li>
            <li>
              <button 
              onClick={this.unauthenticate}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
}
};
Header.propTypes = {
  logOut: PropTypes.func,
  navigate: PropTypes.func,
};
export const HeaderWithAuth = withAuth(Header);
