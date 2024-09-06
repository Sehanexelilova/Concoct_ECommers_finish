// src/router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './Pages/MainPage/main';
import Menu from './Pages/MenuPage/menu';
import Blog from './Pages/BlogPage/blog';
import Events from './Pages/EventsPage/events';
import Reservation from './Pages/ReservationPage/reservation';
import ContactUS from './Pages/ContactPage/contactUS';
import Faq from './Pages/FaqPage/faq';

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/events" element={<Events />} />
    <Route path="/reservation" element={<Reservation />} />
    <Route path="/contact" element={<ContactUS />} />
    <Route path="/faq" element={<Faq />} />
   
  </Routes>
);

export default RouterConfig;
