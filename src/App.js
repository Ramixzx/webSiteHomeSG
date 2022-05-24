import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWorks from './components/HowWorks';
import CanSell from './components/CanSell';
import Table from './components/Table';
import Questions from './components/Questions'
import Form from './components/Form/Form';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HowWorks />
      <CanSell />
      <Table />
      <Questions />
      <Form />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
