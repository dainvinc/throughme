var exampleModel = require('../models/example');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://10.7.0.3:27107/data/db');

exports.ex = function(req, res)
{


filter = {};

    if (req.body.category) 
        filter.category = req.body.category;

    query_limit =  ( req.body.limit) ? req.body.limit : null;

    // Paginating results
    query_skip = (req.body.skip) ? req.body.skip : 0 ;

    // Compacting the results
    query_projection = '';
    compact = (req.body.compact) ? req.body.compact : false;
    if (compact || compact === 'true')
        query_projection = 'seo_keywords seo_description logo_url name category slug breif_info description awards email';

    exampleModel.find(filter)
    .limit(query_limit)
    .skip(query_skip)
    .select(query_projection)
	.exec(function(err, data){
		if(err)
		{
			console.log(err);
		}
		else{
			console.log(data);
		res.send({
		success: true,
		message: 'example working',
		data:data
		
	});	
		}
	});
	//console.log('example');
	
}

exports.post_company = function(req, res)
{

	console.log('create method');
	console.log(req.body.name);
	console.log(req.body);

	if(true)
	{
		now = new Date();
		example = new exampleModel({
			name : req.body.name,
			breif_info : req.body.breif_info,
			logo_url : req.body.logo_url,
			clients : req.body.clients,
			description : req.body.description,
			slug : req.body.slug,
			category : req.body.category,
			website_url : req.body.website_url,
			created_at : now,
			updated_at : now,
			seo_description :req.body.seo_description,
			seo_keywords : req.body.seo_keywords,
			ceo : req.body.ceo,
			contact : req.body.contact,
			email : req.body.email,


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

exports.list_one = function(req, res) {
    // Compacting the results
    query_projection = '';

    compact = (req.param('compact')) ? req.param('compact') : false;

    // compact return only a selection of properties (subset) of the document
    if (compact || compact === 'true')
       	 query_projection = 'seo_keywords seo_description logo_url name category slug breif_info description awards';
    exampleModel.findOne({slug: req.params.slug}, query_projection, function(err, data) {
        if (err){
            
            console.log(err);  
            // Send error message
            res.send({
                success: false,
                message: 'API Error. Please contact Administrator',
                data: []
            })
        } else {

            if (data) {
                
                res.send({
                    success: true,
                    message: 'Record returned successfully.',
                    data: data
                
                })    
            } 
            else {
                 res.send({
                    success: false,
                    message: 'Record not found. Are you sure you entered the correct identifier?',
                    data: []
                })    
            }    
        }
    });
}

exports.update = function(req, res) {
    // Check if user has POST permission
    if (true) {    

        exampleModel.findOne({slug: req.params.slug}, function(err, article){
            if (err) {
                // Display error message to command line
                console.log(err);
				 res.send({
                    success: false,
                    message: 'API Error. Please contact Administrator',
                    data: []
                })
            } else {
                // Record found
                if (article){
                    // Iterating through request parameters
                    for (var field in ArticleModel.schema.paths) {

                         if ((field !== '_id') && (field !== '__v')) {

                            if (req.body[field] !== undefined) {
                               article[field] = req.body[field];
                               console.log(article[field]);
                            }  
                        }  
                    } 

                    // Persist changes on db and return updated object, if successful
                    example.save(function(err, updated_article){
                        if (err) {    
                            // Display error message to command line
                            console.log(err);
						 // Send error message
                            res.send({
                                success: false,
                                message: 'API Error. Please contact Administrator',
                                data: []
                            })
                        } else {
                                            
                            res.send({
                                success: true,
                                message: 'Record updated successfully.',
                                data: updated_article
                            })
                        }
                    })
                }
                 else {
                    
                    res.send({
                        success: false,
                        message: 'Record not found. Are you sure you entered the correct identifier?',
                        data: []
                    })
                }
            }
        })
    } else {
         res.send({
            success: false,
            message: 'Sorry. You cannot make PUT requests to this API. Please contact the Administrator.'
        })
    }
}

exports.update_db = function(req, res){
    exampleModel.find({}, function(err, data) {
        if (err) {
            // Display error message to command line
            console.log(err);
		// Send error message
            res.send({
                success: false,
                message: 'API Error. Please contact Administrator',
                data: []
            })
        } else {
            if (data) {
                for (i=0; i < data.length; i++){

                   

                         if (!data[i].email)
                            data[i].email = '';
                         if (!data[i].password)
                            data[i].password = '';

                    data[i].save();
                }

                
                res.send({
                    success: true,
                    message:'adding major dashboard fields',
                    data: data
                })
            }
            else
                res.send({
                    success: false,
                    message: 'Update failed',
                    data: []
                })
        }
    });
}

