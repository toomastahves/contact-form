import * as actions from '../constants/contact';

export const nameChange = (value) => {
  const name = {
    value,
    valid: true,
    touched: true
  };
  if(value.length < 3) {
    name.valid = false;
  }
  return {
    type: actions.NAME_CHANGE,
    name
  };
};

export const phoneChange = (value) => {
  const phone = {
    value,
    valid: true,
    touched: true
  };
  if(isNaN(value) || value.length < 5) {
    phone.valid = false;
  }
  return {
    type: actions.PHONE_CHANGE,
    phone
  };
};

export const emailChange = (value) => {
  const email = {
    value,
    valid: true,
    touched: true
  };
  // http://stackoverflow.com/a/46181
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(value)) {
    email.valid = false;
  }
  return {
    type: actions.EMAIL_CHANGE,
    email
  };
};

export const billingAddressField1Change = (value) => {
  const billing_address_field1 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    billing_address_field1.valid = false;
  }
  return {
    type: actions.BILLING_ADDRESS_FIELD1_CHANGE,
    billing_address_field1
  };
};

export const billingAddressField2Change = (value) => {
  const billing_address_field2 = {
    value,
    valid: true,
    touched: true
  };
  return {
    type: actions.BILLING_ADDRESS_FIELD2_CHANGE,
    billing_address_field2
  };
};

export const billingAddressField3Change = (value) => {
  const billing_address_field3 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    billing_address_field3.valid = false;
  }
  return {
    type: actions.BILLING_ADDRESS_FIELD3_CHANGE,
    billing_address_field3
  };
};

export const sameAddressChange = (value) => {
  return {
    type: actions.SAME_ADDRESS_CHANGE,
    same_address: value === 'true'
  };
};

export const shippingAddressField1Change = (value) => {
  const shipping_address_field1 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    shipping_address_field1.valid = false;
  }
  return {
    type: actions.SHIPPING_ADDRESS_FIELD1_CHANGE,
    shipping_address_field1
  };
};

export const shippingAddressField2Change = (value) => {
  const shipping_address_field2 = {
    value,
    valid: true,
    touched: true
  };
  return {
    type: actions.SHIPPING_ADDRESS_FIELD2_CHANGE,
    shipping_address_field2
  };
};

export const shippingAddressField3Change = (value) => {
  const shipping_address_field3 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    shipping_address_field3.valid = false;
  }
  return {
    type: actions.SHIPPING_ADDRESS_FIELD3_CHANGE,
    shipping_address_field3
  };
};

export const acceptTermsChange = (value) => {
  const accept_terms = {
    value,
    valid: true,
    touched: true
  };
  if(value === false) {
    accept_terms.valid = false;
  }
  return {
    type: actions.ACCEPT_TERMS_CHANGE,
    accept_terms
  };
};

export const delegateHandleChange = (name, value) => {
  switch(name) {
    case 'name':
      return nameChange(value);
    case 'phone':
      return phoneChange(value);
    case 'email':
      return emailChange(value);
    case 'billing_address_field1':
      return billingAddressField1Change(value);
    case 'billing_address_field2':
      return billingAddressField2Change(value);
    case 'billing_address_field3':
      return billingAddressField3Change(value);
    case 'same_address':
      return sameAddressChange(value);
    case 'shipping_address_field1':
      return shippingAddressField1Change(value);
    case 'shipping_address_field2':
      return shippingAddressField2Change(value);
    case 'shipping_address_field3':
      return shippingAddressField3Change(value);
    case 'accept_terms':
      return acceptTermsChange(value);
    default:
      return;
  }
};
