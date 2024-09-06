import React, { useState } from 'react'
import FooterStyle from './footer.module.css'

// Brand Name Icon
import LogoPNG from '../../assets/Logo/Frame 2.svg'


// Sosiacal media Icons
import FacebookIcon from '../../assets/Sosical Media Icon/Frame 65.svg'
import TwitterIcon from '../../assets/Sosical Media Icon/Frame 66.svg'
import InstagramIcon from '../../assets/Sosical Media Icon/Frame 67.svg'

// Footer Icon 
import Home from '../../assets/FooterMobile/Icon.svg'
import Menu from '../../assets/FooterMobile/Icons.svg'
import Blog from '../../assets/FooterMobile/book.svg'
import Events from '../../assets/FooterMobile/Event.svg'
import Reservation from '../../assets/FooterMobile/reserv.svg'

import { Link } from 'react-router-dom';


function Footer() {


    // Navigation Item
    const navItem = [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Menu',
          link: '/menu'
        },
        {
          name: 'Blog',
          link: '/blog'
        },
        {
          name: 'Events',
          link: '/events'
        },
        {
            name: 'FAQ',
            link: '/faq'
          },
          {
            name: 'Contact',
            link: '/contact'
          }
      ];


    const [item, setItem] = useState(navItem)


    // Sosical Media About
    const media = [

        {
            logo: TwitterIcon,
            link: 'http://www.TwitterIcon.com'
        }
        ,
        {
            logo: FacebookIcon,
            link: 'http://www.facebook.com'
        },
        {
            logo: InstagramIcon,
            link: 'http://www.instagram.com'
        }
    ]
    const [sosicalMedia, setSosicalMedia] = useState(media)

    // Footer Icon (Mobile)
    const navicons = [
        { icon: Home, text: 'Home' , link: '/'},
        { icon: Menu, text: 'Menu' , link: '/menu' },
        { icon: Blog, text: 'Blog' , link: '/blog'},
        { icon: Events, text: 'Events' , link: '/events' },
        { icon: Reservation, text: 'Reservation' , link: '/reservation' },
    ]
 
    const [icons, setIcon] = useState(navicons)

    return (
        <>


            {/* Web View */}
            <section className={FooterStyle.web}>
                <div className={FooterStyle.container}>

                    {/* Footer Nav item */}
                    <div className={FooterStyle.footerNav} >
                        <a href='#' className={FooterStyle.brandName}>

                            {/* BrandLogo */}
                            <div className={FooterStyle.logo}>
                                <img src={LogoPNG} alt="Logo" />
                            </div>

                            <div className={FooterStyle.logoText}>Concoct</div>
                        </a>

                        <ul className={FooterStyle.navItem}>
                            {item.map(item => {
                                return <li><Link to={item.link} >{item.name}</Link></li>
                            })}
                        </ul>


                    </div>

                    <div className={FooterStyle.contact}>


                        {/* Mail and Number */}
                        <div className={FooterStyle.numberMail}>
                            <a href="tel:025636456">025636456</a>
                            <a href="mailto:Concoct@gmail.com">Concoct@gmail.com</a>
                        </div>

                        <div className={FooterStyle.sosicalMedia}>
                            <ul>
                                {sosicalMedia.map((SM, index) => {
                                    return <a href={SM.link} key={index}> <img src={SM.logo} alt="Sosical Media" />   </a>
                                })}
                            </ul>
                        </div>

                    </div>


                    <div className={FooterStyle.Reserved}>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </section>

            {/*  Mobile View */}
            <section className={FooterStyle.mobile}>

                <div className={FooterStyle.container}>

                    <div  className={FooterStyle.navItems}>
                        {icons.map((icon, index) => {
                            return <Link to={icon.link} key={index} className={FooterStyle.item}>
                                <img src={icon.icon} alt="Icon" />
                                <span>{icon.text}</span>
                            </Link>
                        })}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer