import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import imageCardOne from '../../../Assets/images/image-card1-HW.svg';
import imageCardTwo from '../../../Assets/images/image-card2-HW.svg';
import imageCardThree from '../../../Assets/images/image-card3-HW.svg';
import imageCardFour from '../../../Assets/images/image-card4-HW.svg';
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css'

const Testimonials = () => {
  return ( 
    <>
      <section className='testimonials-container--slider'>
        <div className='testimonials-contain'>
          <h2 className='testimonials--title'>¿Cómo funciona?</h2>
          <Carousel infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false} className='carrousel-styles'>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardOne} alt="Mueble" />
              <div>
                <h3 className='testimonials-card--title'>Cotiza tu guardado</h3>
                <p className='testimonials-card--p'>Un precio en base a tus objetos</p>
              </div>
            </article>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardTwo} alt="Camioneta de Space Guru" />
              <div>
                <h3 className='testimonials-card--title'>Recogemos tus cosas</h3>
                <p className='testimonials-card--p'>El día y hora que tú escojas</p>
              </div>
            </article>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardThree} alt="Una persona utilizando la app de Space Guru" />
              <div>
                <h3 className='testimonials-card--title'>Accede a tus objetos online</h3>
                <p className='testimonials-card--p'>Un catálogo con fotos y estadisticas</p>
              </div>
            </article>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardFour} alt="Un operario realizando la devolución de los objetos" />
              <div>
                <h3 className='testimonials-card--title'>Pide tu devolución</h3>
                <p className='testimonials-card--p'>Te llevaremos las cosas cuando las necesites</p>
              </div>
            </article>
          </Carousel>
          <div className='cards--container_desktop'>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardOne} alt="Mueble" />
              <div>
                <h3 className='testimonials-card--title'>Cotiza tu guardado</h3>
                <p className='testimonials-card--p'>Un precio en base a tus objetos</p>
              </div>
            </article>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardTwo} alt="Camioneta de Space Guru" />
              <div>
                <h3 className='testimonials-card--title'>Recogemos tus cosas</h3>
                <p className='testimonials-card--p'>El día y hora que tú escojas</p>
              </div>
            </article>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardThree} alt="Una persona utilizando la app de Space Guru" />
              <div>
                <h3 className='testimonials-card--title'>Accede a tus objetos online</h3>
                <p className='testimonials-card--p'>Un catálogo con fotos y estadisticas</p>
              </div>
            </article>
            <article className='testimonials--card'>
              <img className='testimonials-card--image' src={imageCardFour} alt="Un operario realizando la devolución de los objetos" />
              <div>
                <h3 className='testimonials-card--title'>Pide tu devolución</h3>
                <p className='testimonials-card--p'>Te llevaremos las cosas cuando las necesites</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Testimonials;