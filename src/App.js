import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Nav from './components/Nav';

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
