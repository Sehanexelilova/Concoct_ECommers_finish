import React from 'react'

import Style from './banner.module.css'
import Button from '../../../components/button/button'

import bannerIMG from '../../../assets/BlogPage/Frame 124.png'

function Banner() {
    return (
        <section className={Style.container}>

            <div className={Style.text}>
                <h2>Revealing Culinary Uniqueness</h2>
                <div>
                <Button text={'Read More'} BG_color={'black'} colorText={'white'} />
                </div>
                <p>Behind our welcoming entrance, we invite you to embark on an enchanting journey of flavors, exploring the culinary uniqueness that is our signature.</p>
            </div>

            <img src={bannerIMG} alt="Image " />


        </section>
    )
}

export default Banner