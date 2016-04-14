import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions/l10n';

export const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  dispatch(changeLanguage('ENG'));
  return { dispatch };
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(App);
