let express = require('express');

let router = express.Router();

let controller = require('../controllers/controllers')

router.get('/', controller.root);

module.exports = router;