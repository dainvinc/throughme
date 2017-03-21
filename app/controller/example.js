var exampleModel = require('../models/example');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://10.7.0.3:27107/data/db');

exports.ex = function(req, res)
{
	exampleModel.find()
	.select('name')
	.exec(function(err, data){
		if(err)
		{
			console.log(err);
		}
		else{
		res.send({
		success: true,
		message: 'example working',
		data:data
		
	});	
		}
	});
	console.log('example');
	
}

exports.post_company = function(req, res)
{
	if(true)
	{
		now = new Date();
		example = new exampleModel({
			name : req.params.name,
			breif_info : req.params.breif_info,
			logo_url : req.params.logo_url,
			clients : req.params.clients,
			description : req.params.description,
			slug : req.params.slug,
			category : req.params.category,
			website_url : req.params.website_url,
			created_at : now,
			updated_at : now,
			seo_description :req.params.seo_description,
			seo_keywords : req.params.seo_keywords,
			ceo : req.params.ceo,
			contact : req.params.contact,
			email : req.params.email,


		})
		example.save(function(err, new_record){
			if(err)
			{
				console.log('error');
			}
			else{
				res.send({
		success: true,
		message: 'example working'	
	});	
			}
		})

	}
	
}

