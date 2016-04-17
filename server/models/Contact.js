import mongoose, { Schema } from 'mongoose';

const Contact = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  billing_address_field1: {
    type: String,
    required: true
  },
  billing_address_field2: {
    type: String
  },
  billing_address_field3: {
    type: String,
    required: true
  },
  shipping_address_field1: {
    type: String,
    required: true
  },
  shipping_address_field2: {
    type: String
  },
  shipping_address_field3: {
    type: String,
    required: true
  }
});

export default mongoose.model('Contact', Contact);
