import router from 'koa-route';
import { getContact, listContacts, createContact, updateContact, deleteContact } from '../controllers/contact';

const routes = (app) => {
  app.use(router.get('/contacts', listContacts));
  app.use(router.get('/contact/:_id', getContact));
  app.use(router.post('/contact', createContact));
  app.use(router.put('/contact', updateContact));
  app.use(router.delete('/contact/:_id', deleteContact));
};

export default routes;
