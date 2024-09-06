import React from 'react'
import SloganStyle from './slogan.module.css'
import SloganIMG from '../../../assets/MainPage/Slogan/Frame 45.svg'

function Slogan() {
    return (
        <section className={SloganStyle.container}>

            {/* Left */}
            <p>In every dish we serve, there is a richness of flavors from all over the world.</p>

            {/* Right */}
            <img src={SloganIMG} alt="Photo" />
        </section>
    )
}

export default Slogan