import { SERVER_URI } from '../constants/contact';

export const convertFormToJSON = (form, _id) => {
  const formData = new FormData(form);
  const obj = {};
  for(const key of formData.keys()) {
    obj[key] = formData.get(key);
  }

  if(_id)
    obj['_id'] = _id;

  return JSON.stringify(obj);
};

export const mapIfSameAddress = (data) => {
  const json = JSON.parse(data);
  if(json.same_address === 'true') {
    return JSON.stringify(Object.assign({}, json, {
      shipping_address_field1: json.billing_address_field1,
      shipping_address_field2: json.billing_address_field2,
      shipping_address_field3: json.billing_address_field3
    }));
  }
  return JSON.stringify(json);
};

export const mapFormMetaDataToObject = (data) => {
  const mappedData = {};
  for(const key in data) {
    if(data.hasOwnProperty(key)) {
      mappedData[key] = {};
      mappedData[key].value = data[key];
      mappedData[key].valid = true;
      mappedData[key].touched = false;
    }
  }
  mappedData.accept_terms = {
    value: true,
    valid: true,
    touched: false
  };
  mappedData.same_address = {
    value: false,
    valid: true,
    touched: false
  };
  return mappedData;
};

export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const fetch = ({ path, type, data }) => {
  console.log(`${type} ${SERVER_URI}${path}`);
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(type, `${SERVER_URI}${path}`);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.onload = function() {
      if(req.status === 200 || req.status === 201) {
        resolve(JSON.parse(req.response));
      } else {
        reject(JSON.parse(req.response));
      }
    };
    req.onerror = function() {
      reject(JSON.parse({ error: { message: 'Network error' } }));
    };
    req.send(data);
  });
};
