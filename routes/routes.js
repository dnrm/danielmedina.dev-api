let express = require('express');

let router = express.Router();

let controller = require('../controllers/controllers')

router.get('/', controller.root);
router.get('/get-projects', controller.getProjects);
router.get('/get-project', controller.getProjects);
router.post('/save-project');
router.delete('/delete-project');

module.exports = router;