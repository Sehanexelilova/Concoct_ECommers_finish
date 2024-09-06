import React, { useState } from 'react';
import NavbarStyle from './navbar.module.css';
import LogoPNG from '../../assets/Logo/Frame 2.svg';
import Pencil from '../../assets/navbar/Pencil.svg';
import Contact from '../../assets/navbar/Group 9.svg';
import { Link } from 'react-router-dom';

function Navbar() {

  const navbarItem = [
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
    }
  ];

  const [item, setItems] = useState(navbarItem);

  return (
    <>
      {/* Web view */}
      <section className={NavbarStyle.web}>
        <div className={NavbarStyle.container}>

          {/* Brand Name [Left] */}
          <Link to={'/'} className={NavbarStyle.brandName}>

            {/* BrandLogo */}
            <div className={NavbarStyle.logo}>
              <img src={LogoPNG} alt="Logo" />
            </div>

            <div className={NavbarStyle.logoText}>Concoct</div>
          </Link>

          {/* Nav Item */}
          <ul className={NavbarStyle.navItem}>
            {item.map((item, index) => (
              <li key={index}><Link to={item.link}>{item.name}</Link></li>
            ))}
          </ul>

          {/* Reserv {Right} */}
          <Link to={'/reservation'}>Reservation</Link>
        </div>
      </section>

      {/* Mobile View */}
      <section className={NavbarStyle.mobile}>
        <div className={NavbarStyle.container}>

          {/* Brand Name [Left] */}
          <Link to={'/'} href="#" className={NavbarStyle.brandName}>

            {/* BrandLogo */}
            <div className={NavbarStyle.logo}>
              <img src={LogoPNG} alt="Logo" />
            </div>

            <div className={NavbarStyle.logoText}>Concoct</div>
          </Link>

          {/* Contact {Right} */}
          <div className={NavbarStyle.contact}>
            <a href="#"><img src={Contact} alt="Contact" /></a>
            <a href="#"><img src={Pencil} alt="Pencil" /></a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Navbar;
