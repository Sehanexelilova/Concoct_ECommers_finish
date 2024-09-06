import React, { useState } from 'react';
import Style from './ourMenu.module.css';
import { useLocation } from 'react-router-dom';

function OurMenu({ object, category }) {
    const [searchTerm, setSearchTerm] = useState(''); // Arama girişi için state
    const url = useLocation();
    console.log(url);

    // Arama girdiğine göre öğeleri filtrele
    const filteredFoods = object.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className={Style.container}>
            <div className={Style.header_Search}>
                <h3>Our Menu</h3>
                <div className={Style.searchInput}>
                    <input
                        type="search"
                        placeholder="Search here"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Giriş değişikliğini takip et
                    />
                </div>
            </div>

            <h2>{category}</h2>

            <div className={Style.boxs}>
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food, index) => (
                        <div className={Style.box} key={index}>
                            <img src={food.img} alt={food.name} />
                            <div className={Style.name}>
                                <h2>{food.name}</h2>
                                <span>{`$${food.price}`}</span>
                            </div>
                            <p>{food.about}</p>
                        </div>
                    ))
                ) : (
                    <p>No items found</p> // Arama sonucu yoksa mesaj göster
                )}
            </div>
        </section>
    );
}

export default OurMenu;
