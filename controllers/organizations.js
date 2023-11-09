var Organization = require('../models/organizations');

exports.organization_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization list');
};

exports.organization_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization detail: ' + req.params.id);
};

exports.organization_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization create POST');
};

exports.organization_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization delete DELETE ' + req.params.id);
};

exports.organization_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization update PUT ' + req.params.id);
};



exports.organization_list = async function (req, res) {
    try {
        const Organizations = await Organization.find();
        res.send(Organizations);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.organizations_view_all_Page = async function (req, res) {
    try {
        const theOrganizations = await Organization.find();
        res.render('organizations', { title: 'Organization Search Results', results: theOrganizations });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}



exports.organization_create_post = async function (req, res) {
    console.log(req.body);
    let document = new organizations(); 
    
    document.organizationName = req.body.organizationName;
    document.location = req.body.location; 
    document.industry = req.body.industry;
    document.numberOfEmployees = req.body.numberOfEmployees; 
    document.revenue = req.body.revenue; 
    document.website = req.body.website;

    try {
        let result = await document.save(); 
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

