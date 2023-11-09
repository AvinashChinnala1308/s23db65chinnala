var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var organization_controller = require('../controllers/organizations'); 

router.get('/', api_controller.api);


router.post('/organizations', organization_controller.organization_create_post);

router.delete('/organizations/:id', organization_controller.organization_delete);

router.put('/organizations/:id', organization_controller.organization_update_put);

router.get('/organizations/:id', organization_controller.organization_detail);

router.get('/organizations', organization_controller.organization_list);

module.exports = router;
