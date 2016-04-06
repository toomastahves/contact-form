import { SUBMIT_FORM, SUBMIT_SUCCESS, SUBMIT_FAILED } from '../constants/api';

const initialState = {
  submitResult: {},
  submitError: {},
  submitting: false
};

export const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_FORM:
      return Object.assign({}, state, { submitting: true });
    case SUBMIT_SUCCESS:
      return Object.assign({}, state, { submitResult: action.result, submitting: false });
    case SUBMIT_FAILED:
      return Object.assign({}, state, { submitError: action.error, submitting: false });
    default:
      return state;
  }
};
