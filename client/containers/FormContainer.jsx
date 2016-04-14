import React, { PropTypes } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';
import { connect } from 'react-redux';
import { delegateHandleChange } from '../actions/form';
import { createContactRequest } from '../actions/api';
import { convertFormToJSON, mapIfSameAddress } from '../services/helpers';

export const FormContainer = ({
  name, phone, email, dispatch,
  billingAddressField1, billingAddressField2, billingAddressField3,
  sameAddress, shippingAddressField1, shippingAddressField2, shippingAddressField3,
  acceptTerms, submitResult, submitting, l10n
}) => {
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
        name={name}
        phone={phone}
        email={email}
        billingAddressField1={billingAddressField1}
        billingAddressField2={billingAddressField2}
        billingAddressField3={billingAddressField3}
        sameAddress={sameAddress}
        shippingAddressField1={shippingAddressField1}
        shippingAddressField2={shippingAddressField2}
        shippingAddressField3={shippingAddressField3}
        acceptTerms={acceptTerms}
        handleSubmit={handleSubmit}
        l10n={l10n}
      />
      <Result submitResult={submitResult} submitting={submitting} l10n={l10n} />
    </div>
  );
};

FormContainer.propTypes = {
  name: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  billingAddressField1: PropTypes.object.isRequired,
  billingAddressField2: PropTypes.object.isRequired,
  billingAddressField3: PropTypes.object.isRequired,
  sameAddress: PropTypes.bool.isRequired,
  shippingAddressField1: PropTypes.object.isRequired,
  shippingAddressField2: PropTypes.object.isRequired,
  shippingAddressField3: PropTypes.object.isRequired,
  acceptTerms: PropTypes.object.isRequired,
  submitResult: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  l10n: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    name: state.formReducer.name,
    phone: state.formReducer.phone,
    email: state.formReducer.email,
    billingAddressField1: state.formReducer.billingAddressField1,
    billingAddressField2: state.formReducer.billingAddressField2,
    billingAddressField3: state.formReducer.billingAddressField3,
    sameAddress: state.formReducer.sameAddress,
    shippingAddressField1: state.formReducer.shippingAddressField1,
    shippingAddressField2: state.formReducer.shippingAddressField2,
    shippingAddressField3: state.formReducer.shippingAddressField3,
    acceptTerms: state.formReducer.acceptTerms,
    submitResult: state.apiReducer.submitResult,
    submitting: state.apiReducer.submitting,
    l10n: state.l10nReducer.l10n
  };
};

export default connect(mapStateToProps)(FormContainer);
