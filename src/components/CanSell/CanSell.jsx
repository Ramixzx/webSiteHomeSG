import React from 'react'
import imageSellSection from '../../Assets/images/image-sell-section.svg';
import './CanSell.css'

const CanSell = () => {
  return ( 
    <>
      <section className='cansell--container'>
        <div className='cansell--text-contain'>
          <h2>Puedes vender las cosas que ya no usas</h2>
          <p>¡Gana dinero extra vendiendo aquello que tienes guardado! Tu pones el precio y nosotros nos ocupamos del resto.</p>
        </div>
        <img className='cansell--image-section' src={imageSellSection} alt="Articulos en estado de alquiler (un sofa, una carrola de bebé y un set de valijas)" />
      </section>
    </>
   );
}
 
export default CanSell;