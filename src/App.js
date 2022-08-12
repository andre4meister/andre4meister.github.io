import './App.css';
import React from 'react'
import Nav from './components/Navbar/Nav';
import { HashRouter, Routes, Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer.ts';
import Preloader from './components/common/Preloader/Preloader'

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (<HashRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId" element={<React.Suspense fallback={<div>Loading...</div>}><ProfileContainer /></React.Suspense>} />
            <Route path="/dialogs/*" element={<React.Suspense fallback={<div>Loading...</div>}><DialogsContainer /></React.Suspense> } />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
export default connect(mapStateToProps, { initializeApp })(App);
