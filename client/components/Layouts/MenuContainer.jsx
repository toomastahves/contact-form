import React, { PropTypes } from 'react';
import Header from '../Parts/Header';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/l10n';

export const MenuContainer = ({ dispatch, l10n }) => {
  const handleLanguageChange = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <Header handleLanguageChange={handleLanguageChange} l10n={l10n} />
  );
};

MenuContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  l10n: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    l10n: state.l10nReducer.l10n
  };
};

export default connect(mapStateToProps)(MenuContainer);
