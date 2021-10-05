const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')


const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.json())

const users = []


app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/images', express.static(path.join(__dirname, '../client/build/images')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.get("/api", (req, res) => {
    res.send(users)
  });

app.post('/register', (req, res) => {
    res.send(req.body)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});