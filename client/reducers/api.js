import * as actions from '../constants/api';

const initialState = {
  submitResult: {},
  submitError: {},
  submitting: false,
  contacts: [],
  fetching: false,
  listError: {}
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CREATE_CONTACT_REQUEST:
      return Object.assign({}, state, { submitting: true });
    case actions.CREATE_CONTACT_SUCCESS:
      return Object.assign({}, state, { submitResult: action.result, submitting: false });
    case actions.CREATE_CONTACT_FAILED:
      return Object.assign({}, state, { submitError: action.error, submitting: false });
    case actions.LIST_CONTACTS_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.LIST_CONTACTS_SUCCESS:
      return Object.assign({}, state, { fetching: false, contacts: action.contacts });
    case actions.LIST_CONTACTS_FAILED:
      return Object.assign({}, state, { fetching: false, listError: action.error });
    default:
      return state;
  }
};
