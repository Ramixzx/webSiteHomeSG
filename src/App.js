import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home/Home';
import Help from './views/Help/Help';
import Companies from './views/Companies/Companies';
import AboutUs from './views/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ayuda' element={<Help />}/>
          <Route path='/empresas' element={<Companies />}/>
          <Route path='/nosotros' element={<AboutUs />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
