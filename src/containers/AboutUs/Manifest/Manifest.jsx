import React from 'react';
import imageHowWorksSection from '../../../Assets/images/about-us-gif-manifest.svg';
import './Manifest.css'

const Manifest = () => {
  return ( 
    <>
      <section className='about-us--manifest-section'>
        <div className='about-us--content'>
          <h2 className='about-us--content-title'>¿Nuestro Manifiesto?</h2>
          <ul className='about-us--content-text'>
            <li>Vivimos en un mundo colapsado de cosas que no utilizamos.</li>
            <li>Necesitamos espacio en nuestros hogares.</li>
            <li>Creemos que es tiempo de que empecemos a reutilizar y compartir lo que tenemos.</li>
          </ul>
          <p>En Space Guru ponemos a circular lo que no utilizamos basándonos en la tecnología para poder vivir más simple.</p>
        </div>
        <img className='about-us--image' src={imageHowWorksSection} alt='Una mujer observando un ordenador'></img>
      </section>
    </>
   );
}
 
export default Manifest;