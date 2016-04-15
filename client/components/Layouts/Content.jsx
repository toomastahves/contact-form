import React from 'react';
import MenuContainer from './MenuContainer';
import Footer from '../Parts/Footer';

export const ContentLayout = (SubComponent) => {

  const Sub = (props) => {

    return (
      <div>
        <MenuContainer />
        <SubComponent {...props} />
        <Footer />
      </div>
    );
  };
  return Sub;

};


export default ContentLayout;
