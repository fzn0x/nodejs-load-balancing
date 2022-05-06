
const express = require('express');
const cluster = require('cluster');
const { generateKeyPair } = require('crypto');

require("dotenv").config();

const numCPUs = require('os').cpus().length;

const app = express();
const PORT = process.env.PORT || 3000;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} ready`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    app.listen(PORT, err => console.log(err ? err : `Worker ${process.pid} ready`));

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
}