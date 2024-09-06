import React, { useState } from 'react'

import Style from './contactForm.module.css'


import Button from '../../../components/button/button'
import SendPopUp from '../sendPopUp/sendPopUp'

function ContactForm() {

    const [isActive , setActive ] = useState(false)

    const openPopUp = () => {
        setActive(true)
    }

    const closePopUp = () => { 
        setActive(false)
    }

    return (
        <section className={Style.container}>
            <h3>If You Have Any Suggestions, Questions or Feedback</h3>

            <div className={Style.form}>
                <input type="text" placeholder='Write your name'/>
                <input type="text"  placeholder='Phone number'/>
                <input type="text"  placeholder='Your email address'/>
                <input type="text"  placeholder='Write your message here'/>
            </div>
            <div  onClick={openPopUp} className={Style.BTN}>
            <Button text={'Continue'} />
            </div>


            {isActive && <SendPopUp closePopUp= {closePopUp} />}
        </section>
    )
}

export default ContactForm