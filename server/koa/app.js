import koa from 'koa';
import cors from 'koa-cors';
import serve from 'koa-static';
import favicon from 'koa-favicon';
import routes from '../routes/';

import { connectToMainDatabase } from '../database/mongo';
connectToMainDatabase();

const app = koa();
app.use(cors());
routes(app);

app.use(serve('public'));
app.use(favicon('public/favicon.png'));

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
});

export default app;
