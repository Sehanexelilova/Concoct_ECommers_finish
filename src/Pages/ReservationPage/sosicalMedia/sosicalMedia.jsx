import React, { useState } from 'react'
import Style from './sosicalMedia.module.css'

import instagram from '../../../assets/Reservation/Group.png'
import twitter from '../../../assets/Reservation/Frame 157.png'
import facebook from '../../../assets/Reservation/Vector.png'

function SosicalMedia() {

  const media = [

    {
      icon: twitter,
      text: 'Concoct',
      link: 'www.twitter.com'
    },


    {
      icon: facebook,
      text: 'Concoct',
      link: 'www.facebook.com'
    },
    {
      icon: instagram,
      text: 'Concoct_',
      link: 'www.instagram.com'
    },


  ]


  const [SM, set_SM] = useState(media)

  return (
    <section className={Style.container}>

      <div className={Style.text}>
        <h2>Follow Our Social Media For the Latest Updates</h2>
        <p>We invite you to join our culinary journey and fun via social media. Why? Because here, every update is a personal invitation to enjoy unforgettable moments with us.</p>
      </div>


      <div className={Style.sosialMedia}>
        {
          SM.map((element, index) => {
            return <a href={element.link} className={Style.SM_BTN}>
              <img src={element.icon} alt="" />

              <span>{element.text}</span>
            </a>
          })
        }
      </div>

    </section>
  )
}

export default SosicalMedia