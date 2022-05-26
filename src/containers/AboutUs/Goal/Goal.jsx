import React from 'react';
import imageHowWorksSection from '../../../Assets/images/about-us-gif-manifest.svg';
import './Goal.css'

const Goal = () => {
  return ( 
    <>
      <section className='goal--manifest-section'>
        <div className='goal--content'>
          <h2 className='goal--content-title'>¿Nuestra meta?</h2>
          <ul className='goal--content-text'>
            <li>Revolucionar el concepto de "tener".</li>
            <li>Facilitar la circulación de los objetos que no usamos.</li>
            <li>Darle una segunda vida a nuestros objetos y evitar la superproducción.</li>
          </ul>
          <p>Nuestro gran objetivo es crear un futuro de menos cosas y más espacio, de menos ataduras y más libertad.</p>
        </div>
        <img className='goal--image' src={imageHowWorksSection} alt='Una mujer observando un ordenador'></img>
      </section>
    </>
   );
}
 
export default Goal;