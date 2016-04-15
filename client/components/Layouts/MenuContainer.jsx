import React, { PropTypes } from 'react';
import Header from '../Parts/Header';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/l10n';

export const MenuContainer = ({ dispatch }) => {
  const handleLanguageChange = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <Header handleLanguageChange={handleLanguageChange} />
  );
};

MenuContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(MenuContainer);
