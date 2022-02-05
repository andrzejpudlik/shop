import React from 'react';

import { Announcement, Navbar, Slider, Categories, Products } from '../../components';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default HomePage;
