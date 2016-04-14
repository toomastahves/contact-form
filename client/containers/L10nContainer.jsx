import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/l10n';
import ChangeLang from '../components/Parts/ChangeLang';

export const L10nContainer = ({ dispatch }) => {
  const handleLanguageChange = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(e.target.innerText));
  };
  return (
    null // <ChangeLang handleLanguageChange={handleLanguageChange} />
  );
};

L10nContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  dispatch(changeLanguage('ENG'));
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(L10nContainer);
