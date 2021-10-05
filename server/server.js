const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')


const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.json())

const users = []


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}





app.get("/api", (req, res) => {
    res.send(users)
  });

app.post('/api', (req, res) => {
    const user = req.body
    users.push(user)
    res.send(`${user.name} has registered!`)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});