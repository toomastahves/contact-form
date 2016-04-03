import React, { PropTypes } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import {
  nameChange, phoneChange, emailChange,
  billingAddressField1Change, billingAddressField2Change, billingAddressField3Change,
  sameAddressChange, shippingAddressField1Change, shippingAddressField2Change,
  shippingAddressField3Change, acceptTermsChange
 } from '../actions/form';

export const FormContainer = ({
  name, phone, email, dispatch,
  billingAddressField1, billingAddressField2, billingAddressField3,
  sameAddress, shippingAddressField1, shippingAddressField2, shippingAddressField3,
  acceptTerms
}) => {
  const handleNameChange = (e) => {
    e.preventDefault();
    dispatch(nameChange(e.target.value));
  };
  const handlePhoneChange = (e) => {
    e.preventDefault();
    dispatch(phoneChange(e.target.value));
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    dispatch(emailChange(e.target.value));
  };
  const handleBillingAddressField1Change = (e) => {
    e.preventDefault();
    dispatch(billingAddressField1Change(e.target.value));
  };
  const handleBillingAddressField2Change = (e) => {
    e.preventDefault();
    dispatch(billingAddressField2Change(e.target.value));
  };
  const handleBillingAddressField3Change = (e) => {
    e.preventDefault();
    dispatch(billingAddressField3Change(e.target.value));
  };
  const handleSameAddressChange = (e) => {
    dispatch(sameAddressChange(e.target.value));
  };
  const handleShippingAddressField1Change = (e) => {
    e.preventDefault();
    dispatch(shippingAddressField1Change(e.target.value));
  };
  const handleShippingAddressField2Change = (e) => {
    e.preventDefault();
    dispatch(shippingAddressField2Change(e.target.value));
  };
  const handleShippingAddressField3Change = (e) => {
    e.preventDefault();
    dispatch(shippingAddressField3Change(e.target.value));
  };
  const handleAcceptTermsChange = (e) => {
    dispatch(acceptTermsChange(e.target.checked));
  };
  return (
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
    />
  );
};

FormContainer.propTypes = {
  name: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  billingAddressField1: PropTypes.object.isRequired,
  billingAddressField2: PropTypes.object.isRequired,
  billingAddressField3: PropTypes.object.isRequired,
  sameAddress: PropTypes.string.isRequired,
  shippingAddressField1: PropTypes.object.isRequired,
  shippingAddressField2: PropTypes.object.isRequired,
  shippingAddressField3: PropTypes.object.isRequired,
  acceptTerms: PropTypes.object.isRequired,
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
    acceptTerms: state.formReducer.acceptTerms
  };
};

export default connect(mapStateToProps)(FormContainer);
