const express = require('express');
const bodyParser = require('body-parser');
const Guid = require('guid');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// because of 'data' key in the .json
let { data } = require('./data');

const getBusinessTitles = business => {
  const phraseIds = business.phrase_id ? [business.phrase_id] : business.phrase_ids;
  if(!phraseIds) return [];
  return phraseIds.map(phraseId => data.titles[phraseId]);
};

app.get('/api/businesses', (req, res) => {
  res.send(data.business.map(business => {
    return Object.assign({}, business, {
      titles: getBusinessTitles(business)
    });
  }));
});

app.delete('/api/businesses/:businessId', (req, res) => {
  data.business = data.business.filter(business => business.id !== req.params.businessId);

  res.send({ deleted: true });
});

app.post('/api/businesses/add', (req, res) => {
  console.log(req.body);
  //data.business = data.business.concat(req.body);

  let businessId = Guid.create();
  
  res.send({id: businessId.value});
});

app.listen(8000, () => {
  console.log('API listening on port 8000');
});
