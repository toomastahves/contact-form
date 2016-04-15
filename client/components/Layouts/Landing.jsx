import React from 'react';
import MenuContainer from './MenuContainer';
import Info from '../Parts/Info';
import Footer from '../Parts/Footer';

export const Landing = () => {

  const Sub = () => {
    return (
      <div>
        <MenuContainer />
        <Info />
        <Footer />
      </div>
    );
  };
  return Sub;

};

export default Landing;
