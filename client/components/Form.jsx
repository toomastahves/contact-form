import React, { PropTypes } from 'react';

export const Form = ({
  name, handlePhoneChange, phone, handleNameChange, email, handleEmailChange,
  billingAddressField1, handleBillingAddressField1Change, billingAddressField2, handleBillingAddressField2Change,
  billingAddressField3, handleBillingAddressField3Change, sameAddress, handleSameAddressChange,
  shippingAddressField1, handleShippingAddressField1Change, shippingAddressField2, handleShippingAddressField2Change,
  shippingAddressField3, handleShippingAddressField3Change, acceptTerms, handleAcceptTermsChange, handleSubmit, l10n
}) => {

  // TODO: find better place for this logic
  const status = name.valid && (phone.valid || email.valid) &&
    billingAddressField1.valid && billingAddressField2.valid && billingAddressField3.valid && acceptTerms.valid &&
    (!sameAddress ? shippingAddressField1.valid && shippingAddressField2.valid && shippingAddressField3.valid : true);

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit}>
        <div className='title'>
          {l10n.CONTACT_FORM_TITLE}
        </div>

        <div className='justify'>
          <span className='start-right error'>{!name.valid && name.touched && l10n.NAME_ERROR}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='name'>{l10n.NAME}</label>
          <input onChange={handleNameChange} value={name.value} className='form-input' type='text' name='name' id='name' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{!phone.valid && !email.valid && (phone.touched || email.touched) && l10n.PHONE_AND_EMAIL_ERROR}</span>
        </div>
        <div className='justify'>
          <span className='start-right error'>{!phone.valid && phone.touched && phone.value && l10n.PHONE_ERROR}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='phone'>{l10n.PHONE}</label>
          <input onChange={handlePhoneChange} value={phone.value} className='form-input' type='text' name='phone' id='phone' placeholder='+372' />
        </div>
        <div className='justify'>
          <span className='start-right error'>{!email.valid && email.touched && email.value && l10n.EMAIL_ERROR}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='email'>{l10n.EMAIL}</label>
          <input onChange={handleEmailChange} value={email.value} className='form-input' type='text' name='email' id='email' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{!billingAddressField1.valid && billingAddressField1.touched && l10n.ADDRESS_FIELD1_ERROR}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field1'>{l10n.ADDRESS_FIELD1}</label>
          <input onChange={handleBillingAddressField1Change} value={billingAddressField1.value} className='form-input' type='text' name='billing_address_field1' id='billing_address_field1' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{!billingAddressField2.valid && billingAddressField2.touched && l10n.ADDRESS_FIELD2_ERROR}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field2'>{l10n.ADDRESS_FIELD2}</label>
          <input onChange={handleBillingAddressField2Change} value={billingAddressField2.value} className='form-input' type='text' name='billing_address_field2' id='billing_address_field2' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{!billingAddressField3.valid && billingAddressField3.touched && l10n.ADDRESS_FIELD3_ERROR}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field3'>{l10n.ADDRESS_FIELD3}</label>
          <select onChange={handleBillingAddressField3Change} value={billingAddressField3.value} className='form-input' name='billing_address_field3' id='billing_address_field3' >
            <option value=''>{l10n.ADDRESS_FIELD3_EMPTY}</option>
            <option value='Harjumaa'>{'Harjumaa'}</option>
          </select>
        </div>

        <div className='justify'>
          <input onChange={handleSameAddressChange} checked={sameAddress === true} value={true} className='start-right' type='radio' name='same_address' id='same_address_true' />
          <label htmlFor='same_address_true'>{l10n.SAME_ADDRESS_TRUE}</label>
        </div>
        <div className='justify'>
          <input onChange={handleSameAddressChange} checked={sameAddress === false} value={false} className='start-right' type='radio' name='same_address' id='same_address_false' />
          <label htmlFor='same_address_false'>{l10n.SAME_ADDRESS_FALSE}</label>
        </div>

        {sameAddress === false &&
          <div>
            <div className='justify'>
              <span className='start-right error'>{!shippingAddressField1.valid && shippingAddressField1.touched && l10n.ADDRESS_FIELD1_ERROR}</span>
            </div>
            <div className='justify'>
              <label className='form-label' htmlFor='shipping_address_field1'>{l10n.ADDRESS_FIELD1}</label>
              <input onChange={handleShippingAddressField1Change} value={shippingAddressField1.value} className='form-input' type='text' name='shipping_address_field1' id='shipping_address_field1' />
            </div>

            <div className='justify'>
              <span className='start-right error'>{!shippingAddressField2.valid && shippingAddressField2.touched && l10n.ADDRESS_FIELD2_ERROR}</span>
            </div>
            <div className='justify'>
              <label className='form-label' htmlFor='shipping_address_field2'>{l10n.ADDRESS_FIELD2}</label>
              <input onChange={handleShippingAddressField2Change} value={shippingAddressField2.value} className='form-input' type='text' name='shipping_address_field2' id='shipping_address_field2' />
            </div>

            <div className='justify'>
              <span className='start-right error'>{!shippingAddressField3.valid && shippingAddressField3.touched && l10n.ADDRESS_FIELD3_ERROR}</span>
            </div>
            <div className='justify'>
              <label className='form-label' htmlFor='shipping_address_field3'>{l10n.ADDRESS_FIELD3}</label>
              <select onChange={handleShippingAddressField3Change} value={shippingAddressField3.value} className='form-input' name='shipping_address_field3' id='shipping_address_field3' >
                <option value=''>{l10n.ADDRESS_FIELD3_EMPTY}</option>
                <option value='Harjumaa'>{'Harjumaa'}</option>
              </select>
            </div>
          </div>
        }

        <div className='justify'>
          <span className='start-right error'>{!acceptTerms.valid && acceptTerms.touched && l10n.ACCEPT_TERMS_ERROR}</span>
        </div>
        <div className='justify'>
          <input onChange={handleAcceptTermsChange} checked={acceptTerms.value} className='start-right' id='agree_terms' name='agree_terms' type='checkbox' />
          <label htmlFor='agree_terms'>{l10n.ACCEPT_TERMS}</label>
        </div>

        <div className='justify'>
          <button type='submit' disabled={!status} className='submit-button'>{l10n.SAVE_BUTTON}</button>
        </div>

      </form>
    </div>
  );
};

Form.propTypes = {
  name: PropTypes.object.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  phone: PropTypes.object.isRequired,
  handlePhoneChange: PropTypes.func.isRequired,
  email: PropTypes.object.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  billingAddressField1: PropTypes.object.isRequired,
  handleBillingAddressField1Change: PropTypes.func.isRequired,
  billingAddressField2: PropTypes.object.isRequired,
  handleBillingAddressField2Change: PropTypes.func.isRequired,
  billingAddressField3: PropTypes.object.isRequired,
  handleBillingAddressField3Change: PropTypes.func.isRequired,
  sameAddress: PropTypes.bool.isRequired,
  handleSameAddressChange: PropTypes.func.isRequired,
  shippingAddressField1: PropTypes.object.isRequired,
  handleShippingAddressField1Change: PropTypes.func.isRequired,
  shippingAddressField2: PropTypes.object.isRequired,
  handleShippingAddressField2Change: PropTypes.func.isRequired,
  shippingAddressField3: PropTypes.object.isRequired,
  handleShippingAddressField3Change: PropTypes.func.isRequired,
  acceptTerms: PropTypes.object.isRequired,
  handleAcceptTermsChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  l10n: PropTypes.object.isRequired
};

export default Form;
