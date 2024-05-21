import express from 'express';
import nodemailer from 'nodemailer';
import ckey from 'ckey';

const emailCaches = {};

const router = express.Router();

const transporter = nodemailer.createTransport({
    service: ckey.EMAIL_CLIENT,
    auth: {
      user: ckey.EMAIL_ADDRESS,
      pass: ckey.EMAIL_PASS
    }
  });

router.post('/contact', async (req, res) => {
    try {
        if (req.body.name && req.body.email && req.body.subject && req.body.message) {
            if (req.body.name.trim().length > 0 && req.body.email.trim().length > 0 && req.body.subject.trim().length > 0 && req.body.message.trim().length > 0) {
                if (emailCaches[req.body.email] && Date.now() - emailCaches[req.body.email] < 1000 * 60 * 5) throw new Error(`email [${req.body.email}] already sent message within last 5 minutes`);
                try {
                    const info = await transporter.sendMail({
                        from: ckey.EMAIL_ADDRESS,
                        to: ckey.EMAIL_ADDRESS,
                        subject: `Site Message from [${req.body.email}]`,
                        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\n\n${req.body.message}`,
                        html: `<p><b>Name</b>: ${req.body.name}<br /><b>Email</b>: ${req.body.email}<br /><b>Subject</b>: ${req.body.subject}</p><p style="border: 2px solid black; padding: 4px;">${req.body.message}</p>`
                    });
                    emailCaches[req.body.email] = Date.now();
                    console.log(info);
                    res.json(req.body);
                } catch (e) {
                    console.log(e);
                    res.status(500).json({
                        error: 'error sending message'
                    })
                }
            } else {
                res.status(400).json({
                    error: 'name, email, subject, and message cannot be empty or whitespace'
                });
            }
        } else {
            res.status(400).json({
                error: 'must supply name, email, subject, and message'
            });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({
            error: 'internal server error'
        });
    }
});

export default router;