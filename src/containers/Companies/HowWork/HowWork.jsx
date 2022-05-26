import React from 'react';
import imageHowWorksSection from '../../../Assets/images/companies-how-works.png';
import './HowWork.css'

const HowWork = () => {
  return ( 
    <>
      <section className='companies--howworks-section'>
        <img className='companies--image' src={imageHowWorksSection} alt='Una mujer observando un ordenador'></img>
        <div className='companies--content'>
          <h2 className='companies--content-title'>¿Comó funciona?</h2>
          <div className='companies--content-text'>
            <span>1</span>
            <p><b>Cotiza tu guardado:</b> Nuestro equipo te ayudará a encontrar un plan a la medida de tus necesidades.</p>
          </div>
          <div className='companies--content-text'>
            <span>2</span>
            <p><b>Pasamos a buscarlo:</b> Nos ocupamos de pasar a buscar y trasladar tus cosas.</p>
          </div>
          <div className='companies--content-text'>
            <span>3</span>
            <p><b>Accede a tus cosas:</b> Creamos un catálogo online donde podés ver todo lo que tenés guardado con nosotros.</p>
          </div>
          <div className='companies--content-text'>
            <span>4</span>
            <p><b>Pide una devolución:</b> Llevamos tus cosas de regreso cuando las necesites. Fácil y simple.</p>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default HowWork;