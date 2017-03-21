var express 	 = require('express');
// Express Router
var router 		 = express.Router();

var example = require('../controller/example');
// User Model used for API Key Authentication
//var User  		 = require('../models/user');
// Resource routers


// To add a new resource uncomment and edit the line below
// =================================================================
// Router Middleware
// Authenticates API Key
// =================================================================
/*router.use(function(req, res, next) {

	// check header or url parameters or post parameters for key
	var api_key = req.body.key || req.param('key') || req.headers['x-access-key'];

	// decode key
	if ( api_key ) {

		User.findOne({API_Key: api_key}, function(err, user){
			if (err) 
				return res.json({ success: false, message: 'Failed to authenticate API Key. Please try again later.' });	
			else {
				if ( !user ) {
					return res.json({ success: false, message: 'Invalid API Key. Please provide a valid API Key.' });	
				} else {
					// if everything is fine, save user data to session var for use in other routes
					//req.session_user = user;	
					next();
				}
			}
		});
	} else {
		// No API key provided
		return res.status(403).send({ 
			status: false,			
			message: 'No API Key provided. Please provide an API Key'
		});		
	}

});*/

// ---------------------------------------------------------
// API Routes
// ---------------------------------------------------------
/*
router.get('/article', article.list_all );
router.get('/subscriber', subscriber.list_all );
router.post('/subscriber', subscriber.add);
router.get('/subscriber/list_one/:id', subscriber.list_one );
router.put('/subscriber/list_update/:id', subscriber.update);
router.get('/update-db-subscriber', function(req, res){
	subscriber.update_db(req, res);
})

router.get('/doctor-article-list', doctorarticle.list_all);
router.post('/doctor-article/signup', doctorarticle.doctor_add);
router.get('/doctor-article/login/:email/:password', doctorarticle.is_registered);
router.post('/doctor-article', doctorarticle.add);
router.get('/doctor-article/:slug', doctorarticle.list_one);
router.put('/doctor-article/:slug', doctorarticle.update);
router.get('/doctor-article/list-one/:id',doctorarticle.list_one_method);
router.put('/doctor-article/list-update/:id',doctorarticle.list_one_update);

//router.put('/doctor-article/list-update/:id',doctorarticle.list_one_update);



router.post('/av', av.add);
router.get('/av', av.list_all );
router.get('/av/:date', av.list_one);
router.get('/av/list/one/:id', av.list_one_method);
router.put('/av/:date/:time', av.update);

router.get('/', function(req, res) {
	res.send('Welcome to the TheRightDoctors API!');
});

//this s reminder fuction dont run it ,it should run at end of the day to shedule all future reminders.

router.get('/update-db-article', function(req, res){
	article.update_db(req, res);
})

router.get('/update-db-documentation', function(req, res){
	documentation.update_db(req, res);
})

router.post('/documentation', documentation.add);
router.get('/documentation', documentation.list_all );
router.get('/documentation/:slug', documentation.list_one);

router.put('/documentation/:slug', documentation.update);

router.get('/update-db-appointment', function(req, res){
	appointment.update_db(req, res);
})
router.post('/interview-appointment', appointment.add);
router.get('/interview-appointment', appointment.list_all );
router.get('/interview-appointment/edit/:id', appointment.list_one);

router.put('/interview-appointment/:id', appointment.update_appoinment );
router.get('/availableSlots', availableSlots.update_db_check);
router.get('/availableSlots/list', availableSlots.list_all);
router.put('/availableSlots/:slug', availableSlots.update );
router.get('/update_db_image', function(req, res){     
	image.update_db_image(req, res);				   
})

router.get('/update_event_images', function(req, res){     
	eventimages.update_db_eventimages(req, res);				  
})

router.post('/image/user', imageuser.add);
router.post('/image/user', imageuser.list_all);
// =================================================================
// article Resource routes (/api/<version>/article =================
// =================================================================
router.get('/article', article.list_all);
router.post('/article', article.add);

router.get('/article/top-stories', article.top_stories);
router.get('/article/currently-being-watched', article.get_watch_date);
router.get('/article/random', article.random_stories);
router.get('/article/meta', article.meta);
router.get('/article/home/assets',article.home_assets);
router.get('/article/:slug', article.list_one );
router.put('/article/:slug', article.update );
router.delete('/article/:slug', article.delete );
router.get('/article/:slug/related/', article.related_stories);
router.get('/article/is_register/:email', article.is_registered);


//router.get('/apvic/details', eventmailer.apvic_list_all);
router.post('/apvic/details', eventmailer.apvic_add_list);
//router.get('/ias/details', eventmailer.ias_list_all);
router.post('/ias/details', eventmailer.ias_add_list);
//router.get('/cardiac/details', eventmailer.cardiac_list_all);
router.post('/cardiac/details', eventmailer.cardiac_add_list);
router.post('/wccpci-2016/details', eventmailer.wccpci_add_list)
router.post('/csicon-2014/details', eventmailer.csicon_add_list)
router.post('/doctor/details', eventmailer.add_list)
router.get('/doctor/mailer/list',eventmailer.list_all)
router.get('/doctor/example/list',eventmailer.example_list_all)

router.get('/update-db-doctor-info', function(req, res){
	doctorinfo.update_db(req, res);
})

router.get('/doctor-info', doctorinfo.list_all);
router.post('/doctor-info', doctorinfo.add);
router.get('/doctor-info/:slug', doctorinfo.list_one );
router.put('/doctor-info/:slug', doctorinfo.update );
router.get('/doctor-info/docname/:doctor_name', doctorinfo.list_one_doc );
router.delete('/doctor-info/:slug', doctorinfo.delete );

// =================================================================
// category Resource routes (/api/<version>/category ===============
// =================================================================
router.get('/category', category.list_all );
router.post('/category', category.add);
router.get('/category/:slug', category.list_one );
router.get('/category/name/list', category.list_name );
router.put('/category/:slug', category.update );
router.delete('/category/:slug', category.delete );

// =================================================================
// image Resource routes (/api/<version>/image===============
// =================================================================
router.get('/image', image.list_all );
router.post('/image', image.add);
router.get('/image/:id', image.list_one );
router.put('/image/:id', image.update );
router.delete('/image/:id', image.delete );

// =================================================================
// image Resource routes (/api/<version>/image =================
// =================================================================
router.get('/eventimages', eventimages.list_all );
router.post('/eventimages', eventimages.add);

router.get('/eventimages/:id', eventimages.list_one );
router.put('/eventimages/:id', eventimages.update );
router.delete('/eventimages/:id', eventimages.delete );

// =================================================================
// transaction Resource routes (/api/<version>/transaction =================
// =================================================================
router.get('/transaction', transaction.list_all );
router.post('/transaction', transaction.add);
router.get('/transaction/:order_id', transaction.list_one );
router.put('/transaction/:order_id', transaction.update );

// =================================================================
// log Resource routes (/api/<version>/transaction =================
// =================================================================
router.get('/log', log.list_all );
var prescriptions = require('../controllers/prescriptions');
router.get('/testmail', prescriptions.testfuction);
// router.get('/log/:id', log.list_one );
// End of module*/
router.get('/example',example.ex);
router.post('/create-company/example',example.post_company);


module.exports = router;