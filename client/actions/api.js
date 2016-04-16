import * as actions from '../constants/contact';
import { mapFormMetaDataToObject } from '../services/helpers';
import { convertFormToJSON, mapIfSameAddress } from '../services/helpers';

export const createContactRequest = (data) => {
  const json = convertFormToJSON(data);
  const mapped = mapIfSameAddress(json);
  return {
    type: actions.CREATE_CONTACT_REQUEST,
    data: mapped
  };
};
export const createContactSuccess = (result) => {
  return {
    type: actions.CREATE_CONTACT_SUCCESS,
    result
  };
};
export const createContactFailed = (error) => {
  return {
    type: actions.CREATE_CONTACT_FAILED,
    error
  };
};

export const listContactsRequest = () => {
  return {
    type: actions.LIST_CONTACTS_REQUEST
  };
};
export const listContactsSuccess = (contacts) => {
  return {
    type: actions.LIST_CONTACTS_SUCCESS,
    contacts
  };
};
export const listContactsFailed = (error) => {
  return {
    type: actions.LIST_CONTACTS_FAILED,
    error
  };
};

export const getContactRequest = (_id) => {
  return {
    type: actions.GET_CONTACT_REQUEST,
    _id
  };
};
export const getContactSuccess = (contact) => {
  const mapped = mapFormMetaDataToObject(contact);
  return {
    type: actions.GET_CONTACT_SUCCESS,
    contact: mapped
  };
};
export const getContactFailed = (error) => {
  return {
    type: actions.GET_CONTACT_FAILED,
    error
  };
};

export const updateContactRequest = (data, _id) => {
  const json = convertFormToJSON(data, _id);
  const mapped = mapIfSameAddress(json);
  return {
    type: actions.UPDATE_CONTACT_REQUEST,
    data: mapped
  };
};
export const updateContactSuccess = (contact) => {
  return {
    type: actions.UPDATE_CONTACT_SUCCESS,
    result: contact
  };
};
export const updateContactFailed = (error) => {
  return {
    type: actions.UPDATE_CONTACT_FAILED,
    error
  };
};
