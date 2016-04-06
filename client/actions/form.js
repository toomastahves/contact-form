import {
  NAME_CHANGE, PHONE_CHANGE, EMAIL_CHANGE,
  BILLING_ADDRESS_FIELD1_CHANGE, BILLING_ADDRESS_FIELD2_CHANGE, BILLING_ADDRESS_FIELD3_CHANGE,
  SAME_ADDRESS_CHANGE, SHIPPING_ADDRESS_FIELD1_CHANGE, SHIPPING_ADDRESS_FIELD2_CHANGE,
  SHIPPING_ADDRESS_FIELD3_CHANGE, ACCEPT_TERMS_CHANGE
} from '../constants/form';

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
    type: NAME_CHANGE,
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
    type: PHONE_CHANGE,
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
    type: EMAIL_CHANGE,
    email
  };
};

export const billingAddressField1Change = (value) => {
  const billingAddressField1 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    billingAddressField1.valid = false;
  }
  return {
    type: BILLING_ADDRESS_FIELD1_CHANGE,
    billingAddressField1
  };
};

export const billingAddressField2Change = (value) => {
  const billingAddressField2 = {
    value,
    valid: true,
    touched: true
  };
  return {
    type: BILLING_ADDRESS_FIELD2_CHANGE,
    billingAddressField2
  };
};

export const billingAddressField3Change = (value) => {
  const billingAddressField3 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    billingAddressField3.valid = false;
  }
  return {
    type: BILLING_ADDRESS_FIELD3_CHANGE,
    billingAddressField3
  };
};

export const sameAddressChange = (value) => {
  return {
    type: SAME_ADDRESS_CHANGE,
    value: value === 'true'
  };
};

export const shippingAddressField1Change = (value) => {
  const shippingAddressField1 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    shippingAddressField1.valid = false;
  }
  return {
    type: SHIPPING_ADDRESS_FIELD1_CHANGE,
    shippingAddressField1
  };
};

export const shippingAddressField2Change = (value) => {
  const shippingAddressField2 = {
    value,
    valid: true,
    touched: true
  };
  return {
    type: SHIPPING_ADDRESS_FIELD2_CHANGE,
    shippingAddressField2
  };
};

export const shippingAddressField3Change = (value) => {
  const shippingAddressField3 = {
    value,
    valid: true,
    touched: true
  };
  if(value.length === 0) {
    shippingAddressField3.valid = false;
  }
  return {
    type: SHIPPING_ADDRESS_FIELD3_CHANGE,
    shippingAddressField3
  };
};

export const acceptTermsChange = (value) => {
  const acceptTerms = {
    value,
    valid: true,
    touched: true
  };
  if(value === false) {
    acceptTerms.valid = false;
  }
  return {
    type: ACCEPT_TERMS_CHANGE,
    acceptTerms
  };
};
