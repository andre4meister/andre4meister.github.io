import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Navbar/Nav';
import Dialogs from './components/Dialogs/Dialogs'

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
        <Dialogs/>
        {/* <Profile/> */}
      </div>
      
    </div>
  );
}
export default App;
