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
