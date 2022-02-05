import React from 'react';

import { Announcement, Navbar, Slider, Categories } from '../../components';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default HomePage;
