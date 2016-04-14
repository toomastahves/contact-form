import React, { PropTypes } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';
import { connect } from 'react-redux';
import { delegateHandleChange } from '../actions/form';
import { createContactRequest } from '../actions/api';
import { convertFormToJSON, mapIfSameAddress } from '../services/helpers';

export const FormContainer = ({ contact, dispatch, submitResult, submitting, l10n }) => {
  const handleChange = (e) => {
    if(e.target.type === 'checkbox')
      return dispatch(delegateHandleChange(e.target.name, e.target.checked));

    dispatch(delegateHandleChange(e.target.name, e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const json = convertFormToJSON(e.target);
    const mapped = mapIfSameAddress(json);
    dispatch(createContactRequest(mapped));
  };

  return (
    <div>
      <Form
        handleChange={handleChange}
        contact={contact}
        handleSubmit={handleSubmit}
        l10n={l10n}
      />
      <Result
        submitResult={submitResult}
        submitting={submitting}
        l10n={l10n}
      />
    </div>
  );
};

FormContainer.propTypes = {
  contact: PropTypes.object.isRequired,
  submitResult: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  l10n: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    contact: state.formReducer,
    submitResult: state.apiReducer.submitResult,
    submitting: state.apiReducer.submitting,
    l10n: state.l10nReducer.l10n
  };
};

export default connect(mapStateToProps)(FormContainer);
