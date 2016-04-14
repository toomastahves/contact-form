import React from 'react';
import Header from '../Parts/Header';
import Info from '../Parts/Info';
import Footer from '../Parts/Footer';

export const Landing = () => {

  const Sub = () => {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
  };
  return Sub;

};

export default Landing;
