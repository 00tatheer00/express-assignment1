import express from 'express'

const app = express();

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());



