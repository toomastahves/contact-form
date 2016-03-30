import { VALIDATE_FORM } from '../constants/form';

const initialState = {
  valid: false
};

export const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case VALIDATE_FORM:
      return Object.assign({}, state, { valid: action.valid });
    default:
      return state;
  }
};
