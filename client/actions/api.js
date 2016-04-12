import { CREATE_CONTACT_REQUEST, CREATE_CONTACT_SUCCESS, CREATE_CONTACT_FAILED } from '../constants/api';

export const createContactRequest = (data) => {
  return {
    type: CREATE_CONTACT_REQUEST,
    data
  };
};

export const createContactSuccess = (result) => {
  return {
    type: CREATE_CONTACT_SUCCESS,
    result
  };
};

export const createContactFailed = (error) => {
  return {
    type: CREATE_CONTACT_FAILED,
    error
  };
};
