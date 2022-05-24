import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home/Home';
import Help from './views/Help/Help';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ayuda' element={<Help />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
