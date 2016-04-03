import React, { PropTypes } from 'react';

export const Form = ({
  name, handlePhoneChange, phone, handleNameChange, email, handleEmailChange,
  billingAddressField1, handleBillingAddressField1Change, billingAddressField2, handleBillingAddressField2Change,
  billingAddressField3, handleBillingAddressField3Change, sameAddress, handleSameAddressChange,
  shippingAddressField1, handleShippingAddressField1Change, shippingAddressField2, handleShippingAddressField2Change,
  shippingAddressField3, handleShippingAddressField3Change, acceptTerms, handleAcceptTermsChange
}) => {
  let phoneOrEmailErrorMessage = '';
  if(!phone.valid && !email.valid && (phone.touched || email.touched)) {
    phoneOrEmailErrorMessage = 'Telefon või e-mail kohustuslik';
  }
  return (
    <div className='contact'>
      <form>
        <div className='title justify start-right'>{'Kontaktandmed'}</div>

        <div className='justify'>
          <span className='start-right error'>{name.error}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='name'>{'Ees- ja perenimi'}</label>
          <input onChange={handleNameChange} className='form-input' type='text' name='name' id='name' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{phoneOrEmailErrorMessage}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='phone'>{'Telefon'}</label>
          <input onChange={handlePhoneChange} className='form-input' type='text' name='phone' id='phone' placeholder='+372' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='email'>{'E-post'}</label>
          <input onChange={handleEmailChange} className='form-input' type='text' name='email' id='email' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{billingAddressField1.error}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field1'>{'Tänav, maja, korter'}</label>
          <input onChange={handleBillingAddressField1Change} className='form-input' type='text' name='billing_address_field1' id='billing_address_field1' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{billingAddressField2.error}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field2'>{'Küla/alevik'}</label>
          <input onChange={handleBillingAddressField2Change} className='form-input' type='text' name='billing_address_field2' id='billing_address_field2' />
        </div>

        <div className='justify'>
          <span className='start-right error'>{billingAddressField3.error}</span>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field3'>{'Linn/maakond'}</label>
          <select onChange={handleBillingAddressField3Change} className='form-input' name='billing_address_field3' id='billing_address_field3' >
            <option value=''>{'Vali'}</option>
            <option value='Harjumaa'>{'Harjumaa'}</option>
            <option value='Muu'>{'Muu'}</option>
          </select>
        </div>

        <div className='justify'>
          <input onChange={handleSameAddressChange} checked={sameAddress === 'true'} value='true' className='start-right' type='radio' name='same_address' id='same_address_true' />
          <label htmlFor='same_address_true'>{'Kohaletoimetamine samale aadressile'}</label>
        </div>
        <div className='justify'>
          <input onChange={handleSameAddressChange} checked={sameAddress === 'false'} value='false' className='start-right' type='radio' name='same_address' id='same_address_false' />
          <label htmlFor='same_address_false'>{'Kohaletoimetamine erinevale aadressile'}</label>
        </div>

        {sameAddress === 'false' &&
          <div>
            <div className='justify'>
              <span className='start-right error'>{shippingAddressField1.error}</span>
            </div>
            <div className='justify'>
              <label className='form-label' htmlFor='shipping_address_field1'>{'Tänav, maja, korter'}</label>
              <input onChange={handleShippingAddressField1Change} className='form-input' type='text' name='shipping_address_field1' id='shipping_address_field1' />
            </div>

            <div className='justify'>
              <span className='start-right error'>{shippingAddressField2.error}</span>
            </div>
            <div className='justify'>
              <label className='form-label' htmlFor='shipping_address_field2'>{'Küla/alevik'}</label>
              <input onChange={handleShippingAddressField2Change} className='form-input' type='text' name='shipping_address_field2' id='shipping_address_field2' />
            </div>

            <div className='justify'>
              <span className='start-right error'>{shippingAddressField3.error}</span>
            </div>
            <div className='justify'>
              <label className='form-label' htmlFor='shipping_address_field3'>{'Linn/maakond'}</label>
              <select onChange={handleShippingAddressField3Change} className='form-input' name='shipping_address_field3' id='shipping_address_field3' >
                <option value=''>{'Vali'}</option>
                <option value='Harjumaa'>{'Harjumaa'}</option>
                <option value='Muu'>{'Muu'}</option>
              </select>
            </div>
          </div>
        }

        <div className='justify'>
          <span className='start-right error'>{acceptTerms.error}</span>
        </div>
        <div className='justify'>
          <input onChange={handleAcceptTermsChange} checked={acceptTerms.value} className='start-right' id='agree_terms' name='agree_terms' type='checkbox' />
          <label htmlFor='agree_terms'>{'Olen tingimustega tutvunud'}</label>
        </div>

        <div className='justify'>
          <input className='submit-button' type='submit' value='Salvesta' />
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
  sameAddress: PropTypes.string.isRequired,
  handleSameAddressChange: PropTypes.func.isRequired,
  shippingAddressField1: PropTypes.object.isRequired,
  handleShippingAddressField1Change: PropTypes.func.isRequired,
  shippingAddressField2: PropTypes.object.isRequired,
  handleShippingAddressField2Change: PropTypes.func.isRequired,
  shippingAddressField3: PropTypes.object.isRequired,
  handleShippingAddressField3Change: PropTypes.func.isRequired,
  acceptTerms: PropTypes.object.isRequired,
  handleAcceptTermsChange: PropTypes.func.isRequired
};

export default Form;
