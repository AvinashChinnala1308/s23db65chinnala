
const express = require('express');
const organization_controller= require('../controllers/organizations');

const router = express.Router();

router.get('/', organization_controller.organizations_view_all_Page );
router.get('/organizations/:id', organization_controller.organization_detail);
router.get('/detail', organization_controller.organizations_view_one_Page);

router.get('/create', organization_controller.organization_create_page)

router.get('/update', organization_controller.organization_update_page);

module.exports = router;
