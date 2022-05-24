import React from 'react'
import imageHeroHelp from '../../../Assets/images/hero-bg-image-mb.svg';
import './Hero.css'

const Hero = () => {
  return ( 
    <>
      <section className='help--hero-section'>
        <img className='help--hero-image' src={imageHeroHelp} alt="Repartidor de Space Guru" />
        <div className='help--hero-title'>
          <h1>¿Cómo podemos <br />ayudarte?</h1>
        </div>
      </section>
    </>
   );
}
 
export default Hero;