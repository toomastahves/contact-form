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
  if(!body)
    this.throw('Problems with request', 400);

  const newContact = new Contact(body);
  const result = yield newContact.save();

  if(!result)
    this.throw('Problems while saving.', 400);

  this.body = result;
  this.status = 201;
}

export function* updateContact() {
  const body = yield parse.json(this);

  if(!body)
    this.throw('Problems with request', 400);

  let result = yield Contact.update({ _id: body._id }, body);

  if(!result.n)
    this.throw('Problems while updating.', 400);

  if(result.n)
    result = yield Contact.findOne({ _id: body._id }).exec();

  this.body = result;
}

export function* deleteContact(_id) {
  const result = yield Contact.findById(_id).remove().exec();
  this.body = result;
}
