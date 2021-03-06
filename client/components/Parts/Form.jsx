import React, { PropTypes } from 'react';
import Spinner from './Spinner';

export const Form = ({ handleChange, contact, handleSubmit, l10n, formFetching, serverError }) => {
  if(formFetching) return <div className='spinner-location'><Spinner /></div>;

  const {
    name, phone, email, billing_address_field1, billing_address_field2, billing_address_field3,
    same_address, shipping_address_field1, shipping_address_field2, shipping_address_field3, accept_terms
  } = contact;

  const submitButtonEnabled = name.valid && (phone.valid || email.valid) &&
    billing_address_field1.valid && billing_address_field2.valid && billing_address_field3.valid && accept_terms.valid &&
    (!same_address.value ? shipping_address_field1.valid && shipping_address_field2.valid && shipping_address_field3.valid : true);

  const inputClass = (field, value = true) => {
    return field.valid ? field.touched && value && 'form-input-success' : field.touched && value && 'form-input-error';
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} onChange={handleChange}>

        <div className='form-set'>
          <div className='title'>{l10n.CONTACT_FORM_TITLE}</div>
        </div>
        <div className='form-set'>
          <div className='error'>
            {serverError.message}
          </div>
        </div>

        <div className='error'>
          {!name.valid && name.touched && l10n.NAME_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='name'>{l10n.NAME}</label>
          </div>
          <div className='form-input'>
            <input className={`textinput ${inputClass(name)}`} value={name.value} type='text' name='name' id='name' />
          </div>
        </div>

        <div className='error'>
          {!phone.valid && !email.valid && (phone.touched || email.touched) && l10n.PHONE_AND_EMAIL_ERROR}
        </div>
        <div className='error'>
          {!phone.valid && phone.touched && phone.value && l10n.PHONE_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='phone'>{l10n.PHONE}</label>
          </div>
          <div className='form-input'>
            <input className={`textinput ${inputClass(phone, phone.value)}`} value={phone.value} type='text' name='phone' id='phone' placeholder='+372' />
          </div>
        </div>

        <div className='error'>
          {!email.valid && email.touched && email.value && l10n.EMAIL_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='email'>{l10n.EMAIL}</label>
          </div>
          <div className='form-input'>
            <input className={`textinput ${inputClass(email, email.value)}`} value={email.value} type='text' name='email' id='email' />
          </div>
        </div>

        <div className='error'>
          {!billing_address_field1.valid && billing_address_field1.touched && l10n.ADDRESS_FIELD1_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='billing_address_field1'>{l10n.ADDRESS_FIELD1}</label>
          </div>
          <div className='form-input'>
            <input className={`textinput ${inputClass(billing_address_field1)}`} value={billing_address_field1.value} type='text' name='billing_address_field1' id='billing_address_field1' />
          </div>
        </div>

        <div className='error'>
          {!billing_address_field2.valid && billing_address_field2.touched && l10n.ADDRESS_FIELD2_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='billing_address_field2'>{l10n.ADDRESS_FIELD2}</label>
          </div>
          <div className='form-input'>
            <input className={`textinput ${inputClass(billing_address_field2)}`} value={billing_address_field2.value} type='text' name='billing_address_field2' id='billing_address_field2' />
          </div>
        </div>

        <div className='error'>
          {!billing_address_field3.valid && billing_address_field3.touched && l10n.ADDRESS_FIELD3_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='billing_address_field3'>{l10n.ADDRESS_FIELD3}</label>
          </div>
          <div className='form-input'>
            <select className={`textinput ${inputClass(billing_address_field3)}`} value={billing_address_field3.value} name='billing_address_field3' id='billing_address_field3' >
              <option value=''>{l10n.ADDRESS_FIELD3_EMPTY}</option>
              <option value='Harjumaa'>{'Harjumaa'}</option>
            </select>
          </div>
        </div>

        <div className='form-set address-pick'>
          <div>
            <input className='start-right' readOnly checked={same_address.value === true} value={true} type='radio' name='same_address' id='same_address_true' />
            <label htmlFor='same_address_true'>{l10n.SAME_ADDRESS_TRUE}</label>
          </div>
          <div>
            <input className='start-right' readOnly checked={same_address.value === false} value={false} type='radio' name='same_address' id='same_address_false' />
            <label htmlFor='same_address_false'>{l10n.SAME_ADDRESS_FALSE}</label>
          </div>
        </div>

        {same_address.value === false &&
          <div>
            <div className='error'>
              {!shipping_address_field1.valid && shipping_address_field1.touched && l10n.ADDRESS_FIELD1_ERROR}
            </div>
            <div className='form-set'>
              <div className='form-label'>
                <label htmlFor='shipping_address_field1'>{l10n.ADDRESS_FIELD1}</label>
              </div>
              <div className='form-input'>
                <input className={`textinput ${inputClass(shipping_address_field1)}`} value={shipping_address_field1.value} type='text' name='shipping_address_field1' id='shipping_address_field1' />
              </div>
            </div>

            <div className='error'>
              {!shipping_address_field2.valid && shipping_address_field2.touched && l10n.ADDRESS_FIELD2_ERROR}
            </div>
            <div className='form-set'>
              <div className='form-label'>
                <label htmlFor='shipping_address_field2'>{l10n.ADDRESS_FIELD2}</label>
              </div>
              <div className='form-input'>
                <input className={`textinput ${inputClass(shipping_address_field2)}`} value={shipping_address_field2.value} type='text' name='shipping_address_field2' id='shipping_address_field2' />
              </div>
            </div>

            <div className='error'>
              {!shipping_address_field3.valid && shipping_address_field3.touched && l10n.ADDRESS_FIELD3_ERROR}
            </div>
            <div className='form-set'>
              <div className='form-label'>
                <label htmlFor='shipping_address_field3'>{l10n.ADDRESS_FIELD3}</label>
              </div>
              <div className='form-input'>
                <select className={`textinput ${inputClass(shipping_address_field3)}`} value={shipping_address_field3.value} name='shipping_address_field3' id='shipping_address_field3' >
                  <option value=''>{l10n.ADDRESS_FIELD3_EMPTY}</option>
                  <option value='Harjumaa'>{'Harjumaa'}</option>
                </select>
              </div>
            </div>
          </div>
        }

        <div className='error'>
          {!accept_terms.valid && accept_terms.touched && l10n.ACCEPT_TERMS_ERROR}
        </div>
        <div className='form-set accept-terms'>
          <div>
            <input checked={accept_terms.value} id='accept_terms' name='accept_terms' type='checkbox' />
            <label htmlFor='accept_terms'>{l10n.ACCEPT_TERMS}</label>
          </div>
        </div>

        <div className='form-set'>
          <button className='formbutton' type='submit' disabled={!submitButtonEnabled}>{l10n.SAVE_BUTTON}</button>
        </div>

      </form>
    </div>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  l10n: PropTypes.object.isRequired,
  formFetching: PropTypes.bool.isRequired,
  serverError: PropTypes.object.isRequired
};

export default Form;
