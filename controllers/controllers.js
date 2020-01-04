require('dotenv').config();
const mongodb = require('mongodb');
const Client = mongodb.MongoClient;

let controller = {
    root: (req, res) => {
        return res.status(200).send({
            "status code": "200"
        });
    },

    getImages: (req, res) => {
        return res.status(200).send({
            // Set mongodb code here
        })
    },

    createConnection: async(req, res) => {
        const connection = await Client.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb', { useUnifiedTopology: true });
        const db = await connection.db("dnrm")
        return db;
    },

    info: async(req, res) => {
        this.createConnection();
    }
}

module.exports = controller;