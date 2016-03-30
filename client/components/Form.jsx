import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateForm } from '../actions/form';

export const Form = (props) => {
  return (
    <div>{props.valid.toString()}</div>
  );
};

Form.propTypes = {
  valid: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    valid: state.formReducer.valid
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(validateForm());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
