let express = require('express');

let router = express.Router();

let controller = require('../controllers/controllers')

router.get('/', controller.root);
router.get('/info', controller.info);

module.exports = router;