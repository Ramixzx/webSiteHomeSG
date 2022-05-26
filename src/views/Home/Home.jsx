import React from 'react'
import Hero from '../../components/Hero';
import HowWorks from '../../components/HowWorks';
import CanSell from '../../components/CanSell';
import Table from '../../components/Table';
import Questions from '../../components/Questions'
import Form from '../../components/Form/Form';
import Contact from '../../components/Contact';

const Home = () => {
  return ( 
    <>
      <Hero />
      <HowWorks />
      <CanSell />
      <Table />
      <Questions />
      <Form />
    </>
   );
}
 
export default Home;
