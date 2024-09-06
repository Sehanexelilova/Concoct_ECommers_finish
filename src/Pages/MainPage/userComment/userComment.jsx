import React, { useState } from 'react'
import UserCommentStyle from './userComment.module.css'

import uniqid from 'uniqid';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

import sabineIMG from '../../../assets/MainPage/userComments/Photos Testimoni.png'
import jamesIMG from '../../../assets/MainPage/userComments/James.png'
import jessieIMG from '../../../assets/MainPage/userComments/jessie.png'



function UserComment() {

    const userComments = [
        {
            id: uniqid(),
            commentText: '“I want to share my amazing experience. This is not just food, but an unforgettable journey of flavors. From the comfortable atmosphere to the friendly service, everything exceeded my expectations. The menu served here is truly special. I tried a variety of dishes and they were all excellent.”',
            profilePhoto: sabineIMG,
            userName: 'Sabine Deschamps',
            userPosition: 'Content Creator'

        }, {
            id: uniqid(),
            commentText: '“What impressed me was the high quality ingredients used. All dishes taste fresh and authentic. The restaurant also pays special attention to presentation, creating works of art on every plate. They not only serve with a smile, but also provide great recommendations.”',
            profilePhoto: jamesIMG,
            userName: 'James Peller',
            userPosition: 'Celebrity'

        }, {
            id: uniqid(),
            commentText: "I would also like to mention the cozy and warm atmosphere of this restaurant. The atmosphere created really made my dinner even more special. It's no wonder [Restaurant Name] is my favorite place to gather with friends or family. Thank you, Concoct, for an unforgettable culinary experience.",
            profilePhoto: jessieIMG,
            userName: 'Jessie Chan',
            userPosition: 'Culinary Hobby'

        },
        {
            id: uniqid(),
            commentText: '“I want to share my amazing experience. This is not just food, but an unforgettable journey of flavors. From the comfortable atmosphere to the friendly service, everything exceeded my expectations. The menu served here is truly special. I tried a variety of dishes and they were all excellent.”',
            profilePhoto: sabineIMG,
            userName: 'Sabine Deschamps',
            userPosition: 'Content Creator'

        }, {
            id: uniqid(),
            commentText: '“What impressed me was the high quality ingredients used. All dishes taste fresh and authentic. The restaurant also pays special attention to presentation, creating works of art on every plate. They not only serve with a smile, but also provide great recommendations.”',
            profilePhoto: jamesIMG,
            userName: 'James Peller',
            userPosition: 'Celebrity'

        }, {
            id: uniqid(),
            commentText: "I would also like to mention the cozy and warm atmosphere of this restaurant. The atmosphere created really made my dinner even more special. It's no wonder [Restaurant Name] is my favorite place to gather with friends or family. Thank you, Concoct, for an unforgettable culinary experience.",
            profilePhoto: jessieIMG,
            userName: 'Jessie Chan',
            userPosition: 'Culinary Hobby'

        }

    ]

    const [comment, setComment] = useState(userComments)

    return (
        <section className={UserCommentStyle.container}>

            <div className={UserCommentStyle.text}>
                <h2>What do customers think about our products and services so far?</h2>
                <p>What customers Say</p>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                pagination={{ clickable: true }}
                loop={true}
                className={UserCommentStyle.comments}
            >
                {comment.map(comment => {
                    return (
                        <SwiperSlide key={comment.id} className={UserCommentStyle.box}>
                            <p className={UserCommentStyle.commentText}>{comment.commentText}</p>

                            <div className={UserCommentStyle.profile}>
                                {/* Kullanıcı Fotoğrafı */}
                                <img src={comment.profilePhoto} alt="Profile Photo" />

                                {/* Kullanıcı Bilgileri */}
                                <div className={UserCommentStyle.userAbout}>
                                    <p className={UserCommentStyle.name}>{comment.userName}</p>
                                    <p className={UserCommentStyle.position}>{comment.userPosition}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default UserComment;
