import './App.css';
import './styles/app.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './component/layout/Header';
import Home from './component/home/Home';
import Footer from "./component/layout/Footer";

import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss";
import "./styles/login.scss";



import './component/home/Menu';
import Contact from './component/contact/Contact';
import Login from './component/login/Login';
import About from './component/about/About';
import Notfound from './component/layout/Notfound';



function App() {
  return (
    <Router>
      <Header isAuthenticated="true" />
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/me' element={<Login/>}></Route>
        <Route path='/about' element={<About/> }></Route>
        <Route path='*' element={<Notfound/> }></Route> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
