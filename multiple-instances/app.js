
const express = require('express');
const { generateKeyPair } = require('crypto');

require("dotenv").config();

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.get('/key', (_, res) => {
    generateKeyPair('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
            cipher: 'aes-256-gcm',
            passphrase: 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, () => {
                const r = Math.floor(Math.random() * 16);
                return r.toString(16);
            })
        }
    }, (_, pubKey) => {
        res.send(pubKey);
    });
});

app.listen(PORT, err => console.log(err ? err : `App listening on port ${PORT}!`));
