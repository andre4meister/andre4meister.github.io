import './App.css';
import React from 'react'
import Nav from './components/Navbar/Nav';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav state={props.sideBar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
