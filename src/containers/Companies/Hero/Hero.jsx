import React from 'react'
import imageHeroCompanies from '../../../Assets/images/banner-mb-hero-companies.svg';
import './Hero.css'

const Hero = () => {
  return ( 
    <>
      <section className='companies--hero-section'>
        <img className='companies--hero-image' src={imageHeroCompanies} alt="Repartidor de Space Guru" />
        <div className='companies--hero-title'>
          <h1>La mejor solución <br />para tu empresa</h1>
          <a href='#section--form'><button className='companies--hero-button'>Pide tu presupuesto</button></a>
        </div>
      </section>
    </>
   );
}
 
export default Hero;