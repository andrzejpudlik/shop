import React from 'react';

import { Announcement, Navbar, Slider, Categories, Products, Newsletter, Footer } from '../../components';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
