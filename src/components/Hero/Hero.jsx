import React from 'react'
import heroImageL1 from '../../Assets/images/hero-image-L1.svg';
import './Hero.css'

const Hero = () => {
  return ( 
    <>
      <section className='hero--container'>
        <div>
          <h1 className='hero--title'>Más que un alquiler de trastero, tu guardado online</h1>
          <p className='hero--paragraph'>Gestioná online el retiro, guardado y devolución de tus objetos</p>
          <a href='#section--form'><button className='hero--button_desktop'>Pide tu presupuesto</button></a>
        </div>
        <img className='hero--image' src={heroImageL1} alt="Aplicación movil, transporte propio y empaquetamiento personalizado" />
        <a href='#section--form'><button className='hero--button'>Pide tu presupuesto</button></a>
      </section>
    </>
   );
}
 
export default Hero;
