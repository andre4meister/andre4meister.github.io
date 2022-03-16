import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Navbar/Nav';
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settingss/Settings';
import Friends from './components/Friends/Friends';

// зробити шоб повідомлення були по різні сторони з кружечками    ------------
// в сайдбар добавити блок френдс, який завжди  відображаться і 3 друзів з авами
// стейт для френдсів
function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.sideBar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<Friends state={props.state.sideBar}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
