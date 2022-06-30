var express = require('express');
var router = express.Router();

/* GET home page. */
let landing = require('../controllers/landing')
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead); //lead_id is a parameter
router.get('/lead/:lead_id/edit', landing.show_edit_lead); //for edit
router.post('/lead/:lead_id/edit', landing.edit_lead); //for edit
router.post('/lead/:lead_id/delete', landing.delete_lead); //for edit
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json)
module.exports = router;
