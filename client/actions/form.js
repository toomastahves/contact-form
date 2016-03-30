import { VALIDATE_FORM } from '../constants/form';

export const validateForm = (form) => {
  return {
    type: VALIDATE_FORM,
    valid: true
  };
};
