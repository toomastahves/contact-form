import koa from 'koa';
import cors from 'koa-cors';
import serve from 'koa-static';
import routes from '../routes/';

import { connectToMainDatabase } from '../database/mongo';
connectToMainDatabase();

const app = koa();
app.use(cors());
routes(app);

app.use(serve('public'));

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
});

export default app;
