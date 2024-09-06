import React, { useState } from 'react'
import CategoriesStyle from '../categories/categories.module.css'

//  Unic ID NPM 
import uniqid from 'uniqid';

// Products img 
import Appetizer from '../../../assets/MainPage/Catagories/Appetizer.png'
import Beverages from '../../../assets/MainPage/Catagories/Beverages .png'
import MainCourse from '../../../assets/MainPage/Catagories/Main Course.png'
import Salad from '../../../assets/MainPage/Catagories/Salad.png'
import { Link } from 'react-router-dom';

function Categories() {

    const _products = [
        {
            id: uniqid(),
            name: "Appetizer",
            subText: 'Small dishes served before the main course to whet the appetite.',
            img: Appetizer
        },
        {
            id: uniqid(),
            name: "Beverages",
            subText: 'A mixture of various types of vegetables, fruit and other additional ingredients served with sauce or dressing.',
            img: Beverages
        }
        , {
            id: uniqid(),
            name: "Main Course",
            subText: 'Main dishes often involve protein such as meat, fish, or chicken. Usually served with large portions and side dishes.',
            img: MainCourse
        },
        {
            id: uniqid(),
            name: "Salad",
            subText: 'Various drinks such as coffee, tea, juice, mocktails or specialty drinks.',
            img: Salad
        }
    ]

    const [product, setProduct] = useState(_products)

    return (
        <section className={CategoriesStyle.container}>
            <p>Some Of Our Menu Categories</p>


            <div className={CategoriesStyle.products}>
                {product.map(product => {
                    return <Link to={`./menu`} key={product.id} className={CategoriesStyle.product}>

                        <div className={CategoriesStyle.imgBox}>
                            {/* Product Image */}
                            <img src={product.img} alt="Product Photo" />

                            <div className={CategoriesStyle.text}>
                                <h2>{product.name}</h2>
                                <p>{product.subText}</p>
                            </div>
                        </div>

                        <a href="#"><i class="fa-solid fa-arrow-right"></i></a>

                    </Link>
                })}


            </div>

        </section>
    )
}

export default Categories