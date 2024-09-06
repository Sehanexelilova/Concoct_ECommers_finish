import React from 'react'

import SupplyStyle from './supply.module.css'

import SupplyIMG from '../../../assets/MainPage/Supply/Frame 199.png'
import LineIMG from '../../../assets/MainPage/Supply/Icon/Loading.svg'

function Supply() {
    return (
        <section className={SupplyStyle.container}>
            <img src={SupplyIMG} alt="Image" />

            {/* Right */}
            <div className={SupplyStyle.text}>

                {/* Top */}
                <div className={SupplyStyle.mainText}>
                    <h4>Higher Food Safety</h4>
                    <h2>Sourcing High Quality Ingredients</h2>
                </div>

                {/* Bottom */}
                <div className={SupplyStyle.subText}>
                    <h4>Partnership with Trusted Suppliers</h4>
                    <p>We understand that deliciousness comes from high quality raw materials. Therefore, we always use fresh and quality ingredients in each of our dishes. We partner with local producers to support sustainability and deliver the best taste.</p>
                </div>

                <img src={LineIMG}  />
            </div>
        </section>
    )
}

export default Supply