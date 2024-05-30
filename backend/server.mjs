import express from 'express';
import cors from 'cors';

import contactController from './controllers/contactController.mjs';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api', contactController);

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});