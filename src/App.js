import './App.css';
import React from 'react';
import {LoginWithAuth} from './pages/Login';
import {Registration} from './pages/Registration';
import {Map} from './pages/Map.jsx';
import {ProfileWithAuth} from './pages/Profile.jsx';
import {HeaderWithAuth} from './components/Header.jsx';
import { withAuth } from './pages/AuthContext.jsx';
import PropTypes from 'prop-types'

class App extends React.Component {
  state = { currentPage: 'login' };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };

  render() {
    return (
    <main>
      {(this.state.currentPage === 'map' || this.state.currentPage === 'profile') && <HeaderWithAuth navigate={this.navigateTo} />}
      <section>
        {this.state.currentPage === 'login' && <LoginWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
        {this.state.currentPage === 'map' && <Map navigate={this.navigateTo}/>}
        {this.state.currentPage === 'profile' && <ProfileWithAuth navigate={this.navigateTo}/>}
      </section>
    </main>
    )
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
