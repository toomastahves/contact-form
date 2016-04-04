import {
  NAME_CHANGE, PHONE_CHANGE, EMAIL_CHANGE,
  BILLING_ADDRESS_FIELD1_CHANGE, BILLING_ADDRESS_FIELD2_CHANGE, BILLING_ADDRESS_FIELD3_CHANGE,
  SAME_ADDRESS_CHANGE, SHIPPING_ADDRESS_FIELD1_CHANGE, SHIPPING_ADDRESS_FIELD2_CHANGE,
  SHIPPING_ADDRESS_FIELD3_CHANGE, ACCEPT_TERMS_CHANGE, SUBMIT_FORM
} from '../constants/form';

const initialState = {
  name: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  phone: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  email: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  billingAddressField1: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  billingAddressField2: {
    value: '',
    error: '',
    valid: true,
    touched: false
  },
  billingAddressField3: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  sameAddress: true,
  shippingAddressField1: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  shippingAddressField2: {
    value: '',
    error: '',
    valid: true,
    touched: false
  },
  shippingAddressField3: {
    value: '',
    error: '',
    valid: false,
    touched: false
  },
  acceptTerms: {
    value: false,
    error: '',
    valid: false,
    touched: false
  }
};

export const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case NAME_CHANGE:
      return Object.assign({}, state, { name: action.name });
    case PHONE_CHANGE:
      return Object.assign({}, state, { phone: action.phone });
    case EMAIL_CHANGE:
      return Object.assign({}, state, { email: action.email });
    case BILLING_ADDRESS_FIELD1_CHANGE:
      return Object.assign({}, state, { billingAddressField1: action.billingAddressField1 });
    case BILLING_ADDRESS_FIELD2_CHANGE:
      return Object.assign({}, state, { billingAddressField2: action.billingAddressField2 });
    case BILLING_ADDRESS_FIELD3_CHANGE:
      return Object.assign({}, state, { billingAddressField3: action.billingAddressField3 });
    case SAME_ADDRESS_CHANGE:
      return Object.assign({}, state, { sameAddress: action.value });
    case SHIPPING_ADDRESS_FIELD1_CHANGE:
      return Object.assign({}, state, { shippingAddressField1: action.shippingAddressField1 });
    case SHIPPING_ADDRESS_FIELD2_CHANGE:
      return Object.assign({}, state, { shippingAddressField2: action.shippingAddressField2 });
    case SHIPPING_ADDRESS_FIELD3_CHANGE:
      return Object.assign({}, state, { shippingAddressField3: action.shippingAddressField3 });
    case ACCEPT_TERMS_CHANGE:
      return Object.assign({}, state, { acceptTerms: action.acceptTerms });
    case SUBMIT_FORM:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
