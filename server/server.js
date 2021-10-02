import express from 'express'
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.json())

const users = []


app.get("/api", (req, res) => {
    res.send(users)
  });

app.post('/api', (req, res) => {
    const user = req.body
    users.push(user)
    res.send('Added!')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});