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
    const json = JSON.parse(jsonString);
    if(json.same_address === 'true') {
      json.shipping_address_field1 = json.billing_address_field1;
      json.shipping_address_field2 = json.billing_address_field2;
      json.shipping_address_field3 = json.billing_address_field3;
    }
    console.log(json);
    res.status(200).send(json);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
