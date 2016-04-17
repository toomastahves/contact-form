import * as actions from '../constants/contact';

const initialState = {
  submitResult: {},
  error: {},
  contacts: [],
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
    same_address: {
      value: true,
      valid: true,
      touched: false
    },
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
  },
  contactViewVisible: false,
  formFetching: false,
  viewFetching: false
};

export const contactReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.INIT_NEW_FORM:
      return Object.assign({}, initialState);

    case actions.CREATE_CONTACT_REQUEST:
      return Object.assign({}, state, { contactViewVisible: true, viewFetching: true });
    case actions.CREATE_CONTACT_SUCCESS:
      return Object.assign({}, state, { submitResult: action.result, viewFetching: false });
    case actions.CREATE_CONTACT_FAILED:
      return Object.assign({}, state, { error: action.error, viewFetching: false });

    case actions.UPDATE_CONTACT_REQUEST:
      return Object.assign({}, state, { contactViewVisible: true, viewFetching: true });
    case actions.UPDATE_CONTACT_SUCCESS:
      return Object.assign({}, state, { submitResult: action.result, viewFetching: false });
    case actions.UPDATE_CONTACT_FAILED:
      return Object.assign({}, state, { error: action.error, viewFetching: false });

    case actions.LIST_CONTACTS_REQUEST:
      return Object.assign({}, state, { viewFetching: true });
    case actions.LIST_CONTACTS_SUCCESS:
      return Object.assign({}, state, { contacts: action.contacts, viewFetching: false });
    case actions.LIST_CONTACTS_FAILED:
      return Object.assign({}, state, { error: action.error, viewFetching: false });

    case actions.GET_CONTACT_REQUEST:
      return Object.assign({}, state, { contactViewVisible: false, formFetching: true });
    case actions.GET_CONTACT_SUCCESS:
      return Object.assign({}, state, { contact: action.contact, formFetching: false });
    case actions.GET_CONTACT_FAILED:
      return Object.assign({}, state, { error: action.error, formFetching: false });

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
