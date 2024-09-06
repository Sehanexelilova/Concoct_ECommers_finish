import React from 'react'


import Banner from './banner/banner';
import Slogan from './slogan/slogan';
import Categories from './categories/categories';
import Supply from './supply/supply';
import UserComment from './userComment/userComment';
import Location from './location/location';
import ContactUS from './contactUS/contactUS';


function Main() {
    return (
        <>
            <Banner />
            <Slogan />
            <Categories />
            <Supply />
            <UserComment />
            <Location />
            <ContactUS />
        </>
    )
}

export default Main