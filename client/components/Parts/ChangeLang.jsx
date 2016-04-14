import React, { PropTypes } from 'react';

export const ChangeLang = ({ handleLanguageChange }) => {
  return (
    <span>
      <span onClick={handleLanguageChange} className='language'>{'EST'}</span>
      <span onClick={handleLanguageChange} className='language'>{'ENG'}</span>
    </span>
  );
};

ChangeLang.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired
};

export default ChangeLang;
