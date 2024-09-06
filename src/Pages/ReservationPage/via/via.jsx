import React from 'react'

import Style from './via.module.css'

import image from '../../../assets/Reservation/Frame 155.png'

function Via() {
    return (
        <section className={Style.container}>
            <h3>For Reservations You Can Contact us via</h3>
            <img src={image} alt="" />


            <div className={Style.buttons}>
                <a>Via Telephone</a>
                <a>Via Message</a>
            </div>
        </section>
    )
}

export default Via