import React, { useState } from 'react';
import WppIcon from '../assets/wsp-glove-button/wpp-icon.png';
import '../assets/wsp-glove-button/styles.css'
import phonesData from '../../util/data'

const WhatsAppButtonComponent = () => {
  const [isLinksDisplayActive, setIsLinksDisplayActive] = useState(false);
  return (
    <>
      {
      isLinksDisplayActive 
        ? (
          <div 
            className='whatsapp-chat-container animate__animated animate__fadeIn' 
            style={{ display: isLinksDisplayActive ? 'flex' : 'none' }}
          >
            <div className='container-header'>
              <button className='close-button-header' onClick={() => setIsLinksDisplayActive(false)}> 
                X
              </button>
            </div>
            <div className='container-body'>
              <div className='body-overflow'
              >
                {
                  phonesData.map(number => {
                    return <a target='_blank' href={`https://api.whatsapp.com/send?phone=${number.phone}&text=`}><span>{number.name}</span> <i class="icofont-external-link"></i></a>
                  })
                }
              </div>
            </div>
          </div>
        )
        : (
          <div 
            className='whatsapp-glove-button animate__animated animate__fadeInUp' 
            onClick={() => setIsLinksDisplayActive(!isLinksDisplayActive)}
          >
            <img src={WppIcon} width={35} alt="whatsapp" />
          </div>
        )
      }
    </>
  )
}

export default WhatsAppButtonComponent;