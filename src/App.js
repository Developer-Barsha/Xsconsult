import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'
import Faq from './components/Pages/Faq/Faq';
import Contact from './components/Pages/Contact/Contact';
import Pricing from './components/Pages/Pricing/Pricing';
import EnrollNow from './components/Pages/EnrollNow/EnrollNow';
import Curriculam from './components/Pages/Curriculam/Curriculam';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/faq' element={<Faq/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/pricing' element={<Pricing/>} ></Route>
        <Route path='/curriculam' element={<Curriculam/>} ></Route>
        <Route path='/enroll-now' element={<EnrollNow/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
