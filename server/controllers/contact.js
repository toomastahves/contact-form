import Contact from '../models/Contact';
import parse from 'co-body';

export function* getContact(_id) {
  console.log('request', _id);
  const result = yield Contact.findOne({ _id }).exec();

  if(!result)
    this.throw('No results', 400);

  this.body = result;
}

export function* listContacts() {
  const result = yield Contact.find().exec();
  this.body = result;
}

export function* createContact() {
  const body = yield parse(this);
  console.log(body);
  if(!body) {
    this.body({ error: 'Problems with request' });
    this.status = 400;
  }

  const newContact = new Contact(body);
  try {
    const result = yield newContact.save();
    this.body = result;
    this.status = 201;
  } catch(error) {
    this.body = error;
    this.status = 400;
  }
}

export function* updateContact() {
  const body = yield parse.json(this);
  console.log(body);
  if(!body) {
    this.body({ error: 'Problems with request' });
    this.status = 400;
  }

  try {
    yield Contact.update({ _id: body._id }, body, { runValidators: true });
    const updatedContact = yield Contact.findOne({ _id: body._id }).exec();
    this.body = updatedContact;
  } catch(error) {
    this.body = error;
    this.status = 400;
  }
}

export function* deleteContact(_id) {
  const result = yield Contact.findById(_id).remove().exec();
  this.body = result;
}
