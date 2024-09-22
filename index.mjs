import express from 'express'

const app = express();

const port = 3000;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`Data received: ${JSON.stringify(data)}`);
});

app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.send(`Data with ID ${id} updated to: ${JSON.stringify(updatedData)}`);
});

app.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Data with ID ${id} deleted`);
});

