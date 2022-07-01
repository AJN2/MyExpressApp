const models = require('../models')
var uuid = require('uuid');

exports.get_landing = (req, res, next) =>
    res.render('landing', { title: 'Express from Askiaa & Jingxi with Controllers' });

exports.submit_lead = (req, res, next) => {
    return models.Lead.create({
        email:req.body.lead_email,
        name:req.body.lead_name,
        id:uuid.v4()
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = (req, res, next) => {
    models.Lead.findAll().then(leads => {
        res.render('landing', {title: 'Express from Askiaa and Jingxi with Controllers', leads: leads });//passing any object to the view
    })
}

exports.show_lead = (req, res, next) => {
    return models.Lead.findOne({
        where : {
            id: req.params.lead_id
    }
    }).then(lead => {
        res.render('lead', {lead: lead });//passing any object to the view
    });
}

exports.show_edit_lead = (req, res, next) => {
    return models.Lead.findOne({
        where : {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', {lead: lead });//form to edit
    });
}
/*    
exports.edit_lead = function(req, res, next) {
    req.body.lead_id
    req.body.lead_name
    req.body.lead_email

    return models.Lead.update({
        email:req.body.lead_email,
        name:req.body.lead_name,
        id:req.body.lead_id
    }, {
        where: {
            id: req.body.lead_id
        }
    }).then(result => {
        res.render('lead/edit_lead', {lead: lead });
    })
    }
*/
exports.edit_lead = function(req, res, next) {

	return models.Lead.update({
		email: req.body.lead_email,
        name: req.body.lead_name
	}, { 
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/lead/' + req.params.lead_id);
	})
}

exports.delete_lead = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/leads');
	})
}

exports.delete_lead_json = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.send({ msg: "Success" });
	})
}