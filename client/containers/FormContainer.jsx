import React, { PropTypes } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';
import { connect } from 'react-redux';
import {
  nameChange, phoneChange, emailChange,
  billingAddressField1Change, billingAddressField2Change, billingAddressField3Change,
  sameAddressChange, shippingAddressField1Change, shippingAddressField2Change,
  shippingAddressField3Change, acceptTermsChange
 } from '../actions/form';
import { submitForm } from '../actions/api';
import { convertFormToJSON, mapIfSameAddress } from '../services/helpers';

export const FormContainer = ({
  name, phone, email, dispatch,
  billingAddressField1, billingAddressField2, billingAddressField3,
  sameAddress, shippingAddressField1, shippingAddressField2, shippingAddressField3,
  acceptTerms, submitResult, submitting, l10n
}) => {
  const handleNameChange = (e) => {
    dispatch(nameChange(e.target.value));
  };
  const handlePhoneChange = (e) => {
    dispatch(phoneChange(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(emailChange(e.target.value));
  };
  const handleBillingAddressField1Change = (e) => {
    dispatch(billingAddressField1Change(e.target.value));
  };
  const handleBillingAddressField2Change = (e) => {
    dispatch(billingAddressField2Change(e.target.value));
  };
  const handleBillingAddressField3Change = (e) => {
    dispatch(billingAddressField3Change(e.target.value));
  };
  const handleSameAddressChange = (e) => {
    dispatch(sameAddressChange(e.target.value));
  };
  const handleShippingAddressField1Change = (e) => {
    dispatch(shippingAddressField1Change(e.target.value));
  };
  const handleShippingAddressField2Change = (e) => {
    dispatch(shippingAddressField2Change(e.target.value));
  };
  const handleShippingAddressField3Change = (e) => {
    dispatch(shippingAddressField3Change(e.target.value));
  };
  const handleAcceptTermsChange = (e) => {
    dispatch(acceptTermsChange(e.target.checked));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const json = convertFormToJSON(e.target);
    const mapped = mapIfSameAddress(json);
    dispatch(submitForm(mapped));
  };

  return (
    <div>
      <Form
        name={name}
        handleNameChange={handleNameChange}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
        email={email}
        handleEmailChange={handleEmailChange}
        billingAddressField1={billingAddressField1}
        handleBillingAddressField1Change={handleBillingAddressField1Change}
        billingAddressField2={billingAddressField2}
        handleBillingAddressField2Change={handleBillingAddressField2Change}
        billingAddressField3={billingAddressField3}
        handleBillingAddressField3Change={handleBillingAddressField3Change}
        sameAddress={sameAddress}
        handleSameAddressChange={handleSameAddressChange}
        shippingAddressField1={shippingAddressField1}
        handleShippingAddressField1Change={handleShippingAddressField1Change}
        shippingAddressField2={shippingAddressField2}
        handleShippingAddressField2Change={handleShippingAddressField2Change}
        shippingAddressField3={shippingAddressField3}
        handleShippingAddressField3Change={handleShippingAddressField3Change}
        acceptTerms={acceptTerms}
        handleAcceptTermsChange={handleAcceptTermsChange}
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
