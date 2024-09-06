import React from 'react'

import contactStyle from './contactUS.module.css'


function ContactUS() {
    return (
        <section className={contactStyle.container}>

            <div className={contactStyle.text}>
                <h2>Visit and choose a time that fits your schedule</h2>

                <p>Just call us on the Telephone Number and our customer service team will be happy to help you determine a time that suits your plans. We look forward to welcoming you</p>
            </div>


            <div className={contactStyle.contactAndOppenHours}>

                <div className={contactStyle.openHourse}>
                    <h2>Oppening Hours</h2>

                    <div className={contactStyle.subText}>

                    <p>Tuesday - Friday 15:00 - 22:00</p>
                    <p>Saturday - Sunday  11:00 - 22:00</p>
                    </div>
                </div>

                <div className={contactStyle.openHourse}>
                    <h2>Contact Us</h2>
                    <div className={contactStyle.subText}>
                    <p>+628224574348</p>
                    <p>025636456</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ContactUS