import React from 'react';

import { Announcement, Navbar, Slider, Categories, Products, Newsletter } from '../../components';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default HomePage;
