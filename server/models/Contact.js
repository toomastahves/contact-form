import mongoose, { Schema } from 'mongoose';

const Contact = new Schema({
  name: {
    type: String
  }
});

export default mongoose.model('Contact', Contact);
