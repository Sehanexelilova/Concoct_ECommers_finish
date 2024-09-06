import React from 'react'
import BannerStyle from './banner.module.css';
import BannerIMG from '../../../assets/MainPage/Banner/image/image 15.svg'
import Button from '../../../components/button/button';

function Banner() {
    return (
        <section className={BannerStyle.container}>


            <div className={BannerStyle.headText}>
                <h2 >Exploring Delicacies From Around the World</h2>
            </div>


            <Button text={'Lets Explore'} BG_color={'black'} colorText={'white'} />

            <img src={BannerIMG} alt="" />

            <div className={BannerStyle.subText}>

                <p>We believe that food is not just about eating, but also about celebrating cultural diversity and richness. In Exploring Delicacies From Around the World</p>

                <a href="">See More </a>
            </div>

        </section>
    )
}

export default Banner


