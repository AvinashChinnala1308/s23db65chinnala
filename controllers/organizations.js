const organizations = require('../models/organizations');
var Organization = require('../models/organizations');

exports.organization_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization list');
};

exports.organization_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Organization.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.organization_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization create POST');
};

exports.organization_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Organization delete DELETE ' + req.params.id);
};

exports.organization_update_put = async function (req, res) {
    try {
        let toUpdate = await Organization.findById(req.params.id);

        if (req.body.organizationName)
            toUpdate.organizationName = req.body.organizationName;
        if (req.body.location) toUpdate.location = req.body.location;
        if (req.body.industry) toUpdate.industry = req.body.industry;
        if (req.body.numberOfEmployees) toUpdate.numberOfEmployees = req.body.numberOfEmployees;
        if (req.body.revenue) toUpdate.revenue = req.body.revenue;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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
        console.log(theOrganizations);
        res.render('organizations', { title: 'Organization Search Results', results: theOrganizations });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}



exports.organization_create_post = async function (req, res) {
    console.log(req.body);
    let document = new Organization(); 
    
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

exports.organization_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Organization.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

    exports.organizations_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await Organization.findById( req.query.id)
        res.render('organizationsdetail',
        { title: 'Organization Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };


