import { SUBMIT_FORM, SUBMIT_SUCCESS, SUBMIT_FAILED } from '../constants/form';

export const submitForm = (form) => {
  return {
    type: SUBMIT_FORM,
    form
  };
};

export const submitSuccess = (result) => {
  return {
    type: SUBMIT_SUCCESS,
    result: JSON.parse(result)
  };
};

export const submitFailed = (error) => {
  return {
    type: SUBMIT_FAILED,
    error
  };
};
