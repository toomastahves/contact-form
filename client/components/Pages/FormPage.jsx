import React, { PropTypes } from 'react';
import Form from '../Parts/Form';
import Result from '../Parts/Result';
import { connect } from 'react-redux';
import { delegateHandleChange } from '../../actions/form';
import { createContactRequest, getContactRequest } from '../../actions/api';
import { convertFormToJSON, mapIfSameAddress } from '../../services/helpers';
import ContentLayout from '../Layouts/Content';

export const FormPage = ({ contact, dispatch, submitResult, fetching, l10n }) => {
  console.log(contact);
  const handleChange = (e) => {
    console.log(e.target.value);
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
        fetching={fetching}
      />
      <Result
        submitResult={submitResult}
        fetching={fetching}
        l10n={l10n}
      />
    </div>
  );
};

FormPage.propTypes = {
  contact: PropTypes.object.isRequired,
  submitResult: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  l10n: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer.contact,
    submitResult: state.contactReducer.submitResult,
    fetching: state.contactReducer.fetching,
    l10n: state.l10nReducer.l10n
  };
};

const mapDispatchToProps = (dispatch) => {
  const path = window.location.hash.split('/');
  if(path[1] === 'update') {
    dispatch(getContactRequest(path[2]));
  }
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(FormPage));
