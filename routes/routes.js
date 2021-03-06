let express = require('express');

let router = express.Router();

let controller = require('../controllers/controllers')

router.get('/', controller.root);
router.get('/get-projects', controller.getProjects);
router.get('/get-project/:id', controller.getOneProject);
router.post('/save-project', controller.saveProject);
router.delete('/delete-project/:id', controller.deleteProject);
router.put('/update-project', controller.editProject);

module.exports = router;