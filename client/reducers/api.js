import { CREATE_CONTACT_REQUEST, CREATE_CONTACT_SUCCESS, CREATE_CONTACT_FAILED } from '../constants/api';

const initialState = {
  submitResult: {},
  submitError: {},
  submitting: false
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CONTACT_REQUEST:
      return Object.assign({}, state, { submitting: true });
    case CREATE_CONTACT_SUCCESS:
      return Object.assign({}, state, { submitResult: action.result, submitting: false });
    case CREATE_CONTACT_FAILED:
      return Object.assign({}, state, { submitError: action.error, submitting: false });
    default:
      return state;
  }
};
