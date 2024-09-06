import React, { useState } from 'react'

import Style from './foods.module.css'

import image1 from '../../../assets/BlogPage/Frame 125.png'
import image2 from '../../../assets/BlogPage/Frame 128.png'
import image3 from '../../../assets/BlogPage/Frame 129.png'

function Foods() {

    const foods_ = [
        {
            img: image1,
            name: 'The Story Behind',
            date: '12 Nov 2024',
            about: 'Behind every dish, our chefs carefully craft creations, combining high-quality ingredients and unique cooking techniques. We believe...',
        },
        {
            img: image2,
            name: 'Appetizing Appetizers',
            date: '10 Apr 2024',
            about: 'From refreshing Bruschetta al Pomodoro to crunchy Crispy Calamari...',
        },
        {
            img: image3,
            name: 'The perfect Dessert',
            date: '20 Dec 2024',
            about: 'From the melt-in-the-mouth Dark Chocolate Fondant to the...',
        }
    ]

    const [foods, setFoods] = useState(foods_)



    return (
        <section className={Style.container}>

            {foods.map(food => {
                return <div className={Style.foodItem}>
                    <img src={food.img} />
                    <div>
                        <div className={Style.text}>

                            <h2>{food.name}</h2>

                            <span>{food.date}</span>
                        </div>

                        <p>{food.about}</p>
                    </div>
                </div>
            })}

        </section>
    )
}

export default Foods