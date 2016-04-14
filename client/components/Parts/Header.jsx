import React, { PropTypes } from 'react';

export const Header = () => {
  return (
    <div className='menu'>
      <a href='#home'>{'Home'}</a>
      <a href='#form'>{'Form'}</a>
      <a href='#list'>{'List'}</a>
    </div>
  );
};

export default Header;
