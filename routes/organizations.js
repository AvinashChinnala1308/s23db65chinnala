
const express = require('express');
const organization_controller= require('../controllers/organizations');

const router = express.Router();


  

 router.get('/', organization_controller.organizations_view_all_Page);


  module.exports = router;
