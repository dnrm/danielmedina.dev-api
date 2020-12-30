require('dotenv').config();
const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

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
    }
}

module.exports = controller;