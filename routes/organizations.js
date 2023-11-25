
const express = require('express');
const organization_controller= require('../controllers/organizations');

const router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/', organization_controller.organizations_view_all_Page );
router.get('/organizations/:id', organization_controller.organization_detail);

router.get('/detail',secured, organization_controller.organizations_view_one_Page);

router.get('/create',secured, organization_controller.organization_create_page)

router.get('/update',secured, organization_controller.organization_update_page);

router.get('/delete',secured, organization_controller.organization_delete_Page);

module.exports = router;
