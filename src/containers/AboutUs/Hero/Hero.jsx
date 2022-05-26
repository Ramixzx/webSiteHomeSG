import React from 'react'
import imageHeroAboutUs from '../../../Assets/images/banner-mb-hero-about-us.svg';
import './Hero.css'

const Hero = () => {
  return ( 
    <>
      <section className='about-us--hero-section'>
        <img className='about-us--hero-image' src={imageHeroAboutUs} alt="Repartidor de Space Guru" />
        <div className='about-us--hero-title'>
          <h1>Vivir simple. Reutilizar. <br /> Liberarnos para lo que viene</h1>
        </div>
      </section>
    </>
   );
}
 
export default Hero;