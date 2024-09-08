import React, { useState } from 'react';
import Style from './categories.module.css';
import image from '../../../assets/MenuPage/catagories/Picture Food Web.png';
import image2 from '../../../assets/MenuPage/catagories/image2.png';
import image3 from '../../../assets/MenuPage/catagories/image3.png';
import image4 from '../../../assets/MenuPage/catagories/image4.png';
import image5 from '../../../assets/MenuPage/catagories/image5.png';

import desert1 from '../../../assets/MenuPage/catagories/desert1.jpeg';
import desert2 from '../../../assets/MenuPage/catagories/desert2.webp';
import desert3 from '../../../assets/MenuPage/catagories/desert3.jpg';
import desert4 from '../../../assets/MenuPage/catagories/desert4.webp';
import desert5 from '../../../assets/MenuPage/catagories/desert5.jpg';
import desert6 from '../../../assets/MenuPage/catagories/desert6.jpg';

import drinks1 from '../../../assets/MenuPage/catagories/drinks1.webp';
import drinks2 from '../../../assets/MenuPage/catagories/drinks2.webp';
import drinks3 from '../../../assets/MenuPage/catagories/drinks3.jpg';
import drinks4 from '../../../assets/MenuPage/catagories/drinks4.jpg';
import drinks5 from '../../../assets/MenuPage/catagories/drinks5.jpeg';
import drinks6 from '../../../assets/MenuPage/catagories/drinks6.webp';

import salad1 from '../../../assets/MenuPage/catagories/salad1.jpg';
import salad2 from '../../../assets/MenuPage/catagories/salad2.jpg';
import salad3 from '../../../assets/MenuPage/catagories/salad3.jpg';
import salad4 from '../../../assets/MenuPage/catagories/salad4.jpg';
import salad5 from '../../../assets/MenuPage/catagories/salad5.jpg';
import salad6 from '../../../assets/MenuPage/catagories/salad6.jpg';

import pasta1 from '../../../assets/MenuPage/catagories/pasta1.jpg';
import pasta2 from '../../../assets/MenuPage/catagories/pasta2.jpg';
import pasta3 from '../../../assets/MenuPage/catagories/pasta3.jpg';
import pasta4 from '../../../assets/MenuPage/catagories/pasta4.jpg';
import pasta5 from '../../../assets/MenuPage/catagories/pasta5.jpg';
import pasta6 from '../../../assets/MenuPage/catagories/pasta6.jpg';

import sea1 from '../../../assets/MenuPage/catagories/sea1.jpeg';
import sea2 from '../../../assets/MenuPage/catagories/sea2.jpg';
import sea3 from '../../../assets/MenuPage/catagories/sea3.webp';
import sea4 from '../../../assets/MenuPage/catagories/sea4.webp';
import sea5 from '../../../assets/MenuPage/catagories/sea5.jpeg';
import sea6 from '../../../assets/MenuPage/catagories/sea6.webp';

import OurMenu from '../ourMenu/ourMenu';

function Categories() {
    const catagories_ = {
        Appetizer: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ],
        Salad: [
            {
                img: salad1,
                name: 'Greek Salad',
                about: "A fresh salad made with cucumbers, tomatoes, olives, and feta cheese.",
                price: '12',
            },
            {
                img: salad2,
                name: 'Caesar Salad',
                about: "Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.",
                price: '14',
            },
            {
                img:salad3,
                name: 'Quinoa Salad',
                about: "Healthy quinoa mixed with vegetables, lemon dressing, and fresh herbs.",
                price: '15',
            },
            {
                img: salad4,
                name: 'Waldorf Salad',
                about: "A delightful blend of apples, grapes, celery, and walnuts in a creamy dressing.",
                price: '13',
            },
            {
                img: salad5,
                name: 'Cobb Salad',
                about: "Mixed greens topped with avocado, bacon, chicken, and boiled eggs.",
                price: '16',
            },
            {
                img: salad6,
                name: 'Spinach Salad',
                about: "Baby spinach leaves with fresh strawberries, almonds, and a balsamic vinaigrette.",
                price: '12',
            }
        ],
        Pasta: [
            {
                img: pasta1,
                name: 'Spaghetti Carbonara',
                about: "Classic Italian pasta made with eggs, cheese, pancetta, and black pepper.",
                price: '18',
            },
            {
                img: pasta2,
                name: 'Fettuccine Alfredo',
                about: "Creamy Alfredo sauce over fettuccine noodles topped with parsley.",
                price: '17',
            },
            {
                img: pasta3,
                name: 'Penne Arrabbiata',
                about: "Spicy tomato sauce with garlic and red chili flakes served over penne pasta.",
                price: '16',
            },
            {
                img: pasta4,
                name: 'Lasagna',
                about: "Layers of pasta with beef ragu, ricotta cheese, and marinara sauce.",
                price: '20',
            },
            {
                img: pasta5,
                name: 'Pesto Pasta',
                about: "Pasta tossed with fresh basil pesto, pine nuts, and parmesan cheese.",
                price: '16',
            },
            {
                img: pasta6,
                name: 'Gnocchi',
                about: "Soft potato dumplings served with a light tomato sauce and fresh basil.",
                price: '19',
            }
        ],
        Seafood: [
            {
                img: sea1,
                name: 'Grilled Salmon',
                about: "Freshly grilled salmon served with lemon butter sauce and sautéed vegetables.",
                price: '25',
            },
            {
                img: sea2,
                name: 'Shrimp Scampi',
                about: "Juicy shrimp cooked in a garlic butter sauce served over linguine.",
                price: '22',
            },
            {
                img: sea3,
                name: 'Lobster Roll',
                about: "Tender lobster meat mixed with mayo and served in a toasted bun.",
                price: '28',
            },
            {
                img: sea4,
                name: 'Seafood Paella',
                about: "Traditional Spanish rice dish with shrimp, mussels, and calamari.",
                price: '30',
            },
            {
                img: sea5,
                name: 'Crab Cakes',
                about: "Golden-fried crab cakes served with a tangy remoulade sauce.",
                price: '24',
            },
            {
                img: sea6,
                name: 'Baked Scallops',
                about: "Succulent scallops baked with garlic, butter, and herbs.",
                price: '26',
            }
        ],
        Dessert: [
            {
                img: desert1,
                name: 'Tiramisu',
                about: "Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone.",
                price: '10',
            },
            {
                img: desert2,
                name: 'Cheesecake',
                about: "Creamy New York-style cheesecake served with a strawberry topping.",
                price: '9',
            },
            {
                img: desert3,
                name: 'Chocolate Lava Cake',
                about: "Rich chocolate cake with a molten center served with vanilla ice cream.",
                price: '12',
            },
            {
                img: desert4,
                name: 'Panna Cotta',
                about: "Creamy Italian dessert topped with a berry compote.",
                price: '11',
            },
            {
                img: desert5,
                name: 'Crème Brûlée',
                about: "Silky vanilla custard topped with a layer of caramelized sugar.",
                price: '10',
            },
            {
                img: desert6,
                name: 'Apple Pie',
                about: "Traditional apple pie served warm with a scoop of vanilla ice cream.",
                price: '8',
            }
        ],
        Beverages: [
            {
                img: drinks1,
                name: 'Fresh Lemonade',
                about: "Refreshing lemonade made with freshly squeezed lemons and mint.",
                price: '6',
            },
            {
                img: drinks2,
                name: 'Iced Coffee',
                about: "Cold brewed coffee served over ice with a splash of cream.",
                price: '5',
            },
            {
                img: drinks3,
                name: 'Mango Smoothie',
                about: "Blended mango with yogurt, honey, and a hint of lime.",
                price: '7',
            },
            {
                img: drinks4,
                name: 'Green Tea',
                about: "Brewed green tea served hot or iced with a slice of lemon.",
                price: '4',
            },
            {
                img: drinks5,
                name: 'Sparkling Water',
                about: "Chilled sparkling water with a twist of lime.",
                price: '3',
            },
            {
                img: drinks6,
                name: 'Blue Tea',
                about: "Rich and creamy hot chocolate topped with whipped cream.",
                price: '5',
            }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('Appetizer');
    const [foods, setFoods] = useState(catagories_['Appetizer']);

    const handleFoods = (category) => {
        setSelectedCategory(category);
        setFoods(catagories_[category]);
    };

    return (
        <section className={Style.container}>
            <div className={Style.categories}>
                <h2>Categories</h2>
                <ul>
                    {Object.keys(catagories_).map((category, index) => (
                        <li onClick={() => handleFoods(category)} key={index}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <OurMenu object={foods} category={selectedCategory} />
        </section>
    );
}

export default Categories;
