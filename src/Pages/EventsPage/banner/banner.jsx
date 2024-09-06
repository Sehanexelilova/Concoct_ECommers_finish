import React from 'react'

import Style from './banner.module.css'
import Button from '../../../components/button/button'

import bannerIMG from '../../../assets/EventsPage/Frame 127.png'

function Banner() {
    return (
        <section className={Style.container}>

            <div>
                <div className={Style.text}>
                    <h2>Present Unforgettable Memories</h2>
                    <div>
                    <Button text={'Reserve Now'} BG_color={'black'} colorText={'white'} />
                    </div>
                </div>
                <p>We proudly present our special events agenda, designed to give our customers more than just dinner; we create unforgettable memories. Let's celebrate together!</p>
                <img src={bannerIMG} alt="Image " />
            </div>



            <div className={Style.subText}>
                <p>We proudly present our special events agenda, designed to give our customers more than just dinner; we create unforgettable memories. Let's celebrate together!</p>

                <div className={Style.date}>

                    <div className={Style.day}>
                        <p>12 Nov</p>
                        <span>Date</span>
                    </div>

                    <div className={Style.mon}>
                        <p>Mon</p>
                        <span>On the day</span>
                    </div>


                    <div className={Style.time}>
                        <p>19:00 PM</p>
                        <span>Event start time</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner