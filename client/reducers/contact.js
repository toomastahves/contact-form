import * as actions from '../constants/contact';

const initialState = {
  submitResult: {},
  error: {},
  contacts: [],
  fetching: false,
  contact: {
    name: {
      value: '',
      valid: false,
      touched: false
    },
    phone: {
      value: '',
      valid: false,
      touched: false
    },
    email: {
      value: '',
      valid: false,
      touched: false
    },
    billing_address_field1: {
      value: '',
      valid: false,
      touched: false
    },
    billing_address_field2: {
      value: '',
      valid: true,
      touched: false
    },
    billing_address_field3: {
      value: '',
      valid: false,
      touched: false
    },
    same_address: true,
    shipping_address_field1: {
      value: '',
      valid: false,
      touched: false
    },
    shipping_address_field2: {
      value: '',
      valid: true,
      touched: false
    },
    shipping_address_field3: {
      value: '',
      valid: false,
      touched: false
    },
    accept_terms: {
      value: false,
      valid: false,
      touched: false
    }
  }
};

export const contactReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CREATE_CONTACT_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.CREATE_CONTACT_SUCCESS:
      return Object.assign({}, state, { submitResult: action.result, fetching: false });
    case actions.CREATE_CONTACT_FAILED:
      return Object.assign({}, state, { error: action.error, fetching: false });
    case actions.LIST_CONTACTS_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.LIST_CONTACTS_SUCCESS:
      return Object.assign({}, state, { fetching: false, contacts: action.contacts });
    case actions.LIST_CONTACTS_FAILED:
      return Object.assign({}, state, { fetching: false, error: action.error });
    case actions.GET_CONTACT_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.GET_CONTACT_SUCCESS:
      return Object.assign({}, state, { fetching: false, contact: action.contact });
    case actions.GET_CONTACT_FAILED:
      return Object.assign({}, state, { fetching: false, error: action.error });
    case actions.NAME_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { name: action.name }) });
    case actions.PHONE_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { phone: action.phone }) });
    case actions.EMAIL_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { email: action.email }) });
    case actions.BILLING_ADDRESS_FIELD1_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { billing_address_field1: action.billing_address_field1 }) });
    case actions.BILLING_ADDRESS_FIELD2_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { billing_address_field2: action.billing_address_field2 }) });
    case actions.BILLING_ADDRESS_FIELD3_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { billing_address_field3: action.billing_address_field3 }) });
    case actions.SAME_ADDRESS_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { same_address: action.same_address }) });
    case actions.SHIPPING_ADDRESS_FIELD1_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { shipping_address_field1: action.shipping_address_field1 }) });
    case actions.SHIPPING_ADDRESS_FIELD2_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { shipping_address_field2: action.shipping_address_field2 }) });
    case actions.SHIPPING_ADDRESS_FIELD3_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { shipping_address_field3: action.shipping_address_field3 }) });
    case actions.ACCEPT_TERMS_CHANGE:
      return Object.assign({}, state, { contact: Object.assign({}, state.contact, { accept_terms: action.accept_terms }) });
    default:
      return state;
  }
};
