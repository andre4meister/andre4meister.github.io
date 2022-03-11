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

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs/" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
