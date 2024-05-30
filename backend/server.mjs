import express from 'express';
import cors from 'cors';
import https from 'https';
import ckey from 'ckey';

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

const pingServer = async () => {
    return new Promise((resolve, reject) => {
        const req = https.get(ckey.SERVER_URL, (res) => {
            if (res.statusCode === 200) {
                console.log('Server pinged successfully');
                resolve({
                    statusCode: 200,
                    body: 'Server pinged successfully',
                });
            } else {
                reject(
                    new Error(`Server ping failed with status code: ${res.statusCode}`)
                );
            }
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
};

pingServer();
setInterval(pingServer, 1000 * 60 * 13);