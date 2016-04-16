import React, { PropTypes } from 'react';
import Form from '../Parts/Form';
import ContactView from '../Parts/ContactView';
import { connect } from 'react-redux';
import { delegateHandleChange, initNewForm } from '../../actions/form';
import { createContactRequest, updateContactRequest, getContactRequest } from '../../actions/api';
import ContentLayout from '../Layouts/Content';

export const FormPage = ({ contact, dispatch, submitResult, fetching, l10n, location }) => {
  const handleChange = (e) => {
    if(e.target.type === 'checkbox')
      return dispatch(delegateHandleChange(e.target.name, e.target.checked));

    return dispatch(delegateHandleChange(e.target.name, e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const path = location.pathname.split('/');
    if(path[1] === 'create')
      return dispatch(createContactRequest(e.target));

    if(path[1] === 'update')
      return dispatch(updateContactRequest(e.target, path[2]));
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        contact={contact}
        handleSubmit={handleSubmit}
        l10n={l10n}
      />
      <ContactView
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
  location: PropTypes.object.isRequired,
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname.split('/');
  if(path[1] === 'create') {
    dispatch(initNewForm());
  }
  if(path[1] === 'update') {
    dispatch(getContactRequest(path[2]));
  }
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(FormPage));
