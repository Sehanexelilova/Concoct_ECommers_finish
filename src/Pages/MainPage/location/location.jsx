import React from 'react'
import locationStyle from './location.module.css'

import mapIMG from '../../../assets/MainPage/location/Frame 23.png'

import Button from '../../../components/button/button'

function Location() {
    return (
        <section className={locationStyle.container}>

            <div className={locationStyle.bg_image}>
                <div className={locationStyle.text}>
                    <h3>Our location</h3>
                    <p>Located in the heart of the city, we are an ecosystem for serving unforgettable culinary experiences with touch, warmth and authenticity.</p>
                    <div className={locationStyle.BTN}>
                    <Button text={'Direction'} colorText={'black'} BG_color={'white'} />
                    </div>
                </div>


                <img src={mapIMG} alt="Map" />
            </div>


        </section>
    )
}

export default Location