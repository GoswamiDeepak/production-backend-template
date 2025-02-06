import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to auth-service!');
});

export default app;
