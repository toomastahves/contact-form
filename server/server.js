import { startWebpackDevServer } from './webpack/devServer';

import express from 'express';
const app = express();

app.use(express.static('public'));

app.use('/echo', (req, res) => {
  let jsonString = '';
  req.on('data', (data) => {
    jsonString += data;
  });
  req.on('end', () => {
    console.log(JSON.parse(jsonString));
    res.status(200).send(jsonString);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
