import React, { PropTypes } from 'react';

export const Header = ({ handleLanguageChange, l10n }) => {
  return (
    <div className='header'>
      <div className='menu'>
        <a href='#home'>{l10n.MENU_HOME}</a>
        <a href='#create'>{l10n.MENU_CREATE}</a>
        <a href='#list'>{l10n.MENU_LIST}</a>
      </div>
      <div className='language'>
        <span onClick={handleLanguageChange}><img value='EST' src='flags/ee.svg' /></span>
        <span onClick={handleLanguageChange}><img value='ENG' src='flags/us.svg' /></span>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  l10n: PropTypes.object.isRequired
};

export default Header;
