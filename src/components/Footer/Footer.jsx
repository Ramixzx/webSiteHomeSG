import React from 'react';
import imageFooter from '../../Assets/images/logo-complete-F.svg';
import logoPorpSG from '../../Assets/images/propSG.svg'
import logoAppStore from '../../Assets/images/logo-app-store.svg';
import logoGooglePlay from '../../Assets/images/logo-google-play.svg';
import './Footer.css';

const Footer = () => {
  return ( 
    <>
      <footer className='footer-container'>
        <div className='footer-content'>
          <img className='footer--image-sg' src={imageFooter} alt="Logo SpaceGuru 2022" />
          <div className='footer--contain-content'>
            <p>Quiénes somos</p>
            <a href="#">Manifiesto</a>
            <a href="#">Equipo</a>
            <a href="#">Trabaja con nosotros</a>
            <a href="#">¿Dónde estamos?</a>
          </div>
          <div className='footer--contain-content'>
            <p>Nuestro servicio</p>
            <a href="#">Precios</a>
            <a href="#">Ayuda</a>
            <a href="#">Guía de almacenamiento</a>
            <a href="#">Seguro guardado</a>
          </div>
          <div className='footer--contain-content'>
            <p>Descarga la App</p>
            <a href="#">Space Guru para Android</a>
            <a href="#">Space Guru para iOS</a>
            <a href="#"><img src={logoAppStore} alt="App store" /></a>
            <a href="#"><img src={logoGooglePlay} alt="Google Play" /></a>
          </div>
        </div>
        <div className='terms-and-conditions'>
          <p>Términos y condiciones | Pólitica de privacidad</p>
          <img src={logoPorpSG} alt="Space Guru 2022" />
        </div>
      </footer>
    </>
   );
  }
 
  export default Footer;


  {/* <img src="/images/template-17/images/propSG.svg" alt="Logo SpaceGuru 2022" /> */}