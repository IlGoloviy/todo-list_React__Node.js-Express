const express =  require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/football', (req, res) => {
  console.log('zayshli na sport')
  axios.get('https://www.ua-football.com/sport')
    .then(res => res.data)
    .then(result => {
      res.send(result);
    })
});

app.get('/backetball', (req, res) => {
  console.log('zayshli na basketball')
  axios.get('https://www.ua-football.com/sport/basketball')
    .then(res => res.data)
    .then(result => {
      res.send(result);
    })
});

app.get('/tenis', (req, res) => {
  console.log('zayshli na tenis')
  axios.get('https://www.ua-football.com/sport/tennis')
    .then(res => res.data)
    .then(result => {
      res.send(result);
    })
});

app.get('/box', (req, res) => {
  console.log('zayshli na box')
  axios.get('https://www.ua-football.com/sport/box')
    .then(res => res.data)
    .then(result => {
      res.send(result);
    })
});

app.listen(8080, () => {
  console.log('Server has been started!');
}); 