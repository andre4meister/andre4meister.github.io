import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Profile/>
      <Nav/>
    </div>
  );
}
export default App;
