import './App.css';
import React from 'react';
import {Login} from './pages/Login';
import {Registration} from './pages/Registration';
import {Map} from './pages/Map.jsx';
import {Profile} from './pages/Profile.jsx';
import {Header} from './components/Header.jsx';

class App extends React.Component {
  state = { currentPage: 'login' };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
    <main>
      {this.state.currentPage === 'map' && <Header navigate={this.navigateTo} />}
      {this.state.currentPage === 'profile' && <Header navigate={this.navigateTo} />}
      <section>
        {this.state.currentPage === 'login' && <Login navigate={this.navigateTo} />}
        {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
        {this.state.currentPage === 'map' && <Map navigate={this.navigateTo}/>}
        {this.state.currentPage === 'profile' && <Profile navigate={this.navigateTo}/>}
      </section>
    </main>
    )
  }
}

export default App;
