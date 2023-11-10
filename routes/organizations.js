
const express = require('express');
const organization_controller= require('../controllers/organizations');

const router = express.Router();


 router.get('/', organization_controller.organizations_view_all_Page);

 router.get('/organizations/:id', organization_controller.organization_detail);

  module.exports = router;
