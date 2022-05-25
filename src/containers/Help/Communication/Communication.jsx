import React from 'react';
import phoneCommunication from '../../../Assets/icons/phone-communication.svg';
import mailCommunication from '../../../Assets/icons/mail-communication.svg';
import whatsappCommunication from '../../../Assets/icons/whatsapp-communication.svg';
import symbolCommunication from '../../../Assets/icons/symbol-communication.svg';
import './Communication.css';

const Communication = () => {
  return ( 
    <>
      <section className='help--communication-section'>
          <article className='communication--card'>
            <img src={phoneCommunication} alt="Telefono" />
            <h2>¡Llamanos!</h2>
          </article>
          <article className='communication--card'>
            <img src={mailCommunication} alt="Correo electronico" />
            <h2>¡Escribinos!</h2>
          </article>
          <article className='communication--card'>
            <img src={whatsappCommunication} alt="Logo Whatsapp" />
            <h2>¡Chateá!</h2>
          </article>
          <article className='communication--card'>
            <img src={symbolCommunication} alt="Simbolo de interrogacion" />
            <h2>FAQs</h2>
          </article>
      </section>
    </>
   );
}
 
export default Communication;