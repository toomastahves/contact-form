import React, { PropTypes } from 'react';

export const Form = ({
  handleChange, name, phone, email,
  billingAddressField1, billingAddressField2, billingAddressField3, sameAddress,
  shippingAddressField1, shippingAddressField2, shippingAddressField3, acceptTerms, handleSubmit, l10n
}) => {

  // TODO: find better place for this logic
  const status = name.valid && (phone.valid || email.valid) &&
    billingAddressField1.valid && billingAddressField2.valid && billingAddressField3.valid && acceptTerms.valid &&
    (!sameAddress ? shippingAddressField1.valid && shippingAddressField2.valid && shippingAddressField3.valid : true);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <div className='form-set'>
          <div className='title'>{l10n.CONTACT_FORM_TITLE}</div>
        </div>

        <div className='error'>
          {!name.valid && name.touched && l10n.NAME_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='name'>{l10n.NAME}</label>
          </div>
          <div className='form-input'>
            <input className='textinput' onChange={handleChange} value={name.value} type='text' name='name' id='name' />
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
            <input className='textinput' onChange={handleChange} value={phone.value} type='text' name='phone' id='phone' placeholder='+372' />
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
            <input className='textinput' onChange={handleChange} value={email.value} type='text' name='email' id='email' />
          </div>
        </div>

        <div className='error'>
          {!billingAddressField1.valid && billingAddressField1.touched && l10n.ADDRESS_FIELD1_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='billing_address_field1'>{l10n.ADDRESS_FIELD1}</label>
          </div>
          <div className='form-input'>
            <input className='textinput' onChange={handleChange} value={billingAddressField1.value} type='text' name='billing_address_field1' id='billing_address_field1' />
          </div>
        </div>

        <div className='error'>
          {!billingAddressField2.valid && billingAddressField2.touched && l10n.ADDRESS_FIELD2_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='billing_address_field2'>{l10n.ADDRESS_FIELD2}</label>
          </div>
          <div className='form-input'>
            <input className='textinput' onChange={handleChange} value={billingAddressField2.value} type='text' name='billing_address_field2' id='billing_address_field2' />
          </div>
        </div>

        <div className='error'>
          {!billingAddressField3.valid && billingAddressField3.touched && l10n.ADDRESS_FIELD3_ERROR}
        </div>
        <div className='form-set'>
          <div className='form-label'>
            <label htmlFor='billing_address_field3'>{l10n.ADDRESS_FIELD3}</label>
          </div>
          <div className='form-input'>
            <select className='textinput' onChange={handleChange} value={billingAddressField3.value} name='billing_address_field3' id='billing_address_field3' >
              <option value=''>{l10n.ADDRESS_FIELD3_EMPTY}</option>
              <option value='Harjumaa'>{'Harjumaa'}</option>
            </select>
          </div>
        </div>

        <div className='form-set address-pick'>
          <div>
            <input onChange={handleChange} checked={sameAddress === true} value={true} className='start-right' type='radio' name='same_address' id='same_address_true' />
            <label htmlFor='same_address_true'>{l10n.SAME_ADDRESS_TRUE}</label>
          </div>
          <div>
            <input onChange={handleChange} checked={sameAddress === false} value={false} className='start-right' type='radio' name='same_address' id='same_address_false' />
            <label htmlFor='same_address_false'>{l10n.SAME_ADDRESS_FALSE}</label>
          </div>
        </div>

        {sameAddress === false &&
          <div>
            <div className='error'>
              {!shippingAddressField1.valid && shippingAddressField1.touched && l10n.ADDRESS_FIELD1_ERROR}
            </div>
            <div className='form-set'>
              <div className='form-label'>
                <label htmlFor='shipping_address_field1'>{l10n.ADDRESS_FIELD1}</label>
              </div>
              <div className='form-input'>
                <input className='textinput' onChange={handleChange} value={shippingAddressField1.value} type='text' name='shipping_address_field1' id='shipping_address_field1' />
              </div>
            </div>

            <div className='error'>
              {!shippingAddressField2.valid && shippingAddressField2.touched && l10n.ADDRESS_FIELD2_ERROR}
            </div>
            <div className='form-set'>
              <div className='form-label'>
                <label htmlFor='shipping_address_field2'>{l10n.ADDRESS_FIELD2}</label>
              </div>
              <div className='form-input'>
                <input className='textinput' onChange={handleChange} value={shippingAddressField2.value} type='text' name='shipping_address_field2' id='shipping_address_field2' />
              </div>
            </div>

            <div className='error'>
              {!shippingAddressField3.valid && shippingAddressField3.touched && l10n.ADDRESS_FIELD3_ERROR}
            </div>
            <div className='form-set'>
              <div className='form-label'>
                <label htmlFor='shipping_address_field3'>{l10n.ADDRESS_FIELD3}</label>
              </div>
              <div className='form-input'>
                <select className='textinput' onChange={handleChange} value={shippingAddressField3.value} name='shipping_address_field3' id='shipping_address_field3' >
                  <option value=''>{l10n.ADDRESS_FIELD3_EMPTY}</option>
                  <option value='Harjumaa'>{'Harjumaa'}</option>
                </select>
              </div>
            </div>
          </div>
        }

        <div className='error'>
          {!acceptTerms.valid && acceptTerms.touched && l10n.ACCEPT_TERMS_ERROR}
        </div>
        <div className='form-set accept-terms'>
          <div>
            <input onChange={handleChange} checked={acceptTerms.value} id='agree_terms' name='agree_terms' type='checkbox' />
            <label htmlFor='agree_terms'>{l10n.ACCEPT_TERMS}</label>
          </div>
        </div>

        <div className='form-set'>
          <button className='formbutton' type='submit' disabled={!status}>{l10n.SAVE_BUTTON}</button>
        </div>

      </form>
    </div>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  billingAddressField1: PropTypes.object.isRequired,
  billingAddressField2: PropTypes.object.isRequired,
  billingAddressField3: PropTypes.object.isRequired,
  sameAddress: PropTypes.bool.isRequired,
  shippingAddressField1: PropTypes.object.isRequired,
  shippingAddressField2: PropTypes.object.isRequired,
  shippingAddressField3: PropTypes.object.isRequired,
  acceptTerms: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  l10n: PropTypes.object.isRequired
};

export default Form;
