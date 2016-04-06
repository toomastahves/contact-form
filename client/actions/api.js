import { SUBMIT_FORM, SUBMIT_SUCCESS, SUBMIT_FAILED } from '../constants/api';

export const submitForm = (data) => {
  return {
    type: SUBMIT_FORM,
    data
  };
};

export const submitSuccess = (result) => {
  return {
    type: SUBMIT_SUCCESS,
    result
  };
};

export const submitFailed = (error) => {
  return {
    type: SUBMIT_FAILED,
    error
  };
};
