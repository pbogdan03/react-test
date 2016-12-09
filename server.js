const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// because of 'data' key in the .json
const { data } = require('./data');

const getBusinessTitles = business => {
  const phraseIds = business.phrase_id ? [business.phrase_id] : business.phrase_ids;
  return phraseIds.map(phraseId => data.titles[phraseId]);
};

app.get('/api/businesses', (req, res) => {

  res.send(data.business.map(business => {
    return Object.assign({}, business, {
      titles: getBusinessTitles(business)
    });
  }));
});

app.listen(8000, () => {
  console.log('API listening on port 8000');
});
