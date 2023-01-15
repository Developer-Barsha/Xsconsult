import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
