import React from 'react';
import logoHeader from '../../Assets/images/logo-header.svg';
import iconPhoneHeader from '../../Assets/icons/icon-phone-header.svg';
import iconUser from '../../Assets/icons/icon-user.svg';
import './Header.css'

const Header = () => {
  return ( 
    <>
      <header className='header--container'>
        <img className='header--logo' src={logoHeader} alt="Logo Space Guru" />
        <img className='header--phone-icon' src={iconPhoneHeader} alt="Telefono movil" />
        <img className='header--user-icon' src={iconUser} />
        <div className='header--navigator-menu_desktop'>
          <span>Nosotros</span>
          <span>Empresas</span>
          <span>Ayuda</span>
        </div>
        <div className='header--info_desktop'>
          <div className='header--phone-icon_desktop'>
            <img src={iconPhoneHeader} />
            <p>910 000 445</p>
          </div>
          <div className='header--user-icon_desktop'>
            <img src={iconUser} />
            <p>Ingresar</p>
          </div>
        </div>
      </header>
    </>
   );
}
 
export default Header;