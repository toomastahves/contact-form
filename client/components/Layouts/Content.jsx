import React from 'react';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {

    return (
      <div>
        <Header />
        <SubComponent {...props} />
        <Footer />
      </div>
    );
  };
  return Sub;

};


export default ContentLayout;
