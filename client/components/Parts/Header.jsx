import React, { PropTypes } from 'react';

export const Header = ({ handleLanguageChange }) => {
  return (
    <div className='header'>
      <div className='menu'>
        <a href='#home'>{'Home'}</a>
        <a href='#create'>{'Create'}</a>
        <a href='#list'>{'List'}</a>
      </div>
      <div className='language'>
        <span onClick={handleLanguageChange}><img value='EST' src='flags/ee.svg' /></span>
        <span onClick={handleLanguageChange}><img value='ENG' src='flags/us.svg' /></span>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired
};

export default Header;
