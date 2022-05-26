import React from 'react'
import imageFormSection from '../../../Assets/images/image-form-section.svg';
import arrowRight from '../../../Assets/icons/arrow-right.svg';
import './Form.css'

const Form = () => {
  return ( 
    <>
    <section id='section--form' className='section-form'>
      <div className='form--title-contain'>
        <h2>Pedinos tu presupuesto</h2>
        <img className='title-contain--arrow' src={arrowRight} alt='Flecha señalando el formulario' />
        <img className='title-contain--image' src={imageFormSection} alt="Una persona observando que objetos guardar en Space Guru" />
      </div>
      <div className='form--container'>
        <form className='form--content'>
          <h3 className='form--header'>Pedinos tu presupuesto</h3>
          <div>
            <label className='form--label' htmlFor="inputName">TU NOMBRE</label>
            <input className='form--input' type="text" id='inputName' placeholder='Ej. Maria'/>
          </div>
          <div>
            <label className='form--label' htmlFor="inputSurname">TU APELLIDO</label>
            <input className='form--input' type="text" id='inputSurname' placeholder='Ej. Gonzalez'/>
          </div>
          <div>
            <label className='form--label' htmlFor="inputMail">TU MAIL</label>
            <input className='form--input' type='email' id='inputMail' placeholder='Ej. Maria'/>
          </div>
          <div>
            <label className='form--label' htmlFor="inputWhatsapp">WHATSAPP</label>
            <input className='form--input' type='number' id='inputWatsapp' placeholder='Ej. 123 456 789'/>
          </div>
          <button className='form--button'>Enviar</button>
        </form>
      </div>
    </section>
    </>
   );
}
 
export default Form;