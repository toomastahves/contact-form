import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from '../Parts/Form';
import ContactView from '../Parts/ContactView';
import { delegateHandleChange, initNewForm } from '../../actions/form';
import { createContactRequest, updateContactRequest, getContactRequest } from '../../actions/api';
import ContentLayout from '../Layouts/Content';

export const FormPage = ({ contact, dispatch, submitResult, formFetching, viewFetching, l10n, location, contactViewVisible }) => {
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
  const handleUpdate = (e) => {
    window.location = `#/update/${e.target.value}`;
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        contact={contact}
        handleSubmit={handleSubmit}
        l10n={l10n}
        formFetching={formFetching}
      />
      {contactViewVisible &&
        <ContactView
          handleUpdate={handleUpdate}
          submitResult={submitResult}
          viewFetching={viewFetching}
          l10n={l10n}
          location={location}
        />
      }
    </div>
  );
};

FormPage.propTypes = {
  contact: PropTypes.object.isRequired,
  submitResult: PropTypes.object.isRequired,
  formFetching: PropTypes.bool.isRequired,
  viewFetching: PropTypes.bool.isRequired,
  l10n: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  contactViewVisible: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer.contact,
    submitResult: state.contactReducer.submitResult,
    formFetching: state.contactReducer.formFetching,
    viewFetching: state.contactReducer.viewFetching,
    contactViewVisible: state.contactReducer.contactViewVisible,
    l10n: state.l10nReducer.l10n
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname.split('/');

  if(path[1] === 'create')
    dispatch(initNewForm());

  if(path[1] === 'update')
    dispatch(getContactRequest(path[2]));

  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(FormPage));
