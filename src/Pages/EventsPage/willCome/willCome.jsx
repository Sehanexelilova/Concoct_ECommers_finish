import React, { useState } from 'react'

import Style from './willCcome.module.css'

import image1 from '../../../assets/EventsPage/Frame 128.png'
import image2 from '../../../assets/EventsPage/Frame 129.png'
import image3 from '../../../assets/EventsPage/Frame 130.png'


function WillCome() {

    const whillCome_ = [
        {
            img: image1,
            name: 'Live Music Night',
            time: '18:00 PM',
            day: '14 Nov'
        },
        {
            img: image2,
            name: 'Wine & Dine Soiree',
            time: '18:00 PM',
            day: '14 Nov'
        },
        {
            img: image3,
            name: 'Evening Culinary',
            time: '18:00 PM',
            day: '14 Nov'
        }
    ]


    const [whillCome, set_whillCome] = useState(whillCome_)


    return (
        <section className={Style.container}>
            <p>Which Will Come</p>

            <div className={Style.boxs}>
                {
                    whillCome.map((come, index) => {
                       return <div key={index} className={Style.box}>
                            <img src={come.img} />
                            <div className={Style.text}>
                                <h2>{come.name}</h2>
                                <span>{come.time}</span>
                            </div>

                            <h3>{come.day}</h3>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default WillCome