
const express = require('express');
const organization_controller= require('../controllers/organizations');

const router = express.Router();

<<<<<<< HEAD
=======

  

>>>>>>> 6cf7f5d9b7a410c7ce213e0fe0328b81fd1e8267
 router.get('/', organization_controller.organizations_view_all_Page);


  module.exports = router;
