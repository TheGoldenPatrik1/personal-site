# personal-site
## Overview
This is the source code for my personal webiste. It is built in JavaScript using React for the frontend and a Node Express server for the backend.
## Setup
### Backend
1. In the root directory, create a `.env` file with the following parameters:
    * `EMAIL_CLIENT` - the type of email client (for example, `gmail`)
    * `EMAIL_ADDRESS` - the address for the nodemailer client to use
    * `EMAIL_PASS` - the password to the email address
1. In a new terminal, navigate to `/backend`.
2. Run `npm i` to install packages.
3. Run `node server.mjs` to start the server.
### Frontend
1. In a new terminal, navigate to `/frontend`.
2. Run `npm i` to install packages.
3. Run `npm start` to start the app.