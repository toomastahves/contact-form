import mongoose, { Schema } from 'mongoose';

const Contact = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  billing_address_field1: {
    type: String
  },
  billing_address_field2: {
    type: String
  },
  billing_address_field3: {
    type: String
  },
  shipping_address_field1: {
    type: String
  },
  shipping_address_field2: {
    type: String
  },
  shipping_address_field3: {
    type: String
  }
});

export default mongoose.model('Contact', Contact);
