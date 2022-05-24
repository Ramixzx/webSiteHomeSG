import React from 'react';
import iconPhone from '../../Assets/icons/icon-phone.svg';
import iconMail from '../../Assets/icons/icon-mail.svg';
import iconClock from '../../Assets/icons/icon-clock.svg';
import iconSocialMedia from '../../Assets/icons/icon-social-media.svg';
import iconInstagramSM from '../../Assets/icons/icon-instagram-sm.svg';
import iconLinkedinSM from '../../Assets/icons/icon-linkedin-sm.svg';
import iconFacebookSM from '../../Assets/icons/icon-facebook-sm.svg';
import './Contact.css'

const Contact = () => {
  return ( 
    <>
      <section className='section-contact--container'>
        <div className='contanct--cards'>
          <img src={iconClock} alt="Reloj" />
          <p>
            <span>Horarios de atención</span>
            <span>Lun a Vie - 9 AM a 7PM <br />Sab 9 AM - 2 PM</span>
          </p>
        </div>
        <div className='contanct--cards'>
          <img src={iconPhone} alt="Telefono" />
          <p>
            <span>LLamanos</span>
            <span>910 059 888</span>
          </p>
        </div>
        <div className='contanct--cards'>
          <img src={iconMail} alt="Carta" />
          <p>
            <span>Escribinos</span>
            <span>hola@space.guru</span>
          </p>
        </div>
        <div className='contanct--cards'>
          <img src={iconSocialMedia} alt="Pulgar arriba" />
          <p>
            <span>Seguinos</span>
            <div className='card--social-media'>
              <a href="https://www.instagram.com/spaceguruarg/" target={'_blank'}>
                <img src={iconInstagramSM} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/spaceguru/" target={'_blank'}>
                <img src={iconLinkedinSM} alt="Linkedin" />
              </a>
              <a href="https://www.facebook.com/SpaceGuruOK" target={'_blank'}>
                <img src={iconFacebookSM} alt="Facebook" />
              </a>
            </div>
          </p>
        </div>
      </section>
    </>
   );
}
 
export default Contact;