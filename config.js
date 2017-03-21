// false for testing environment, true for production/live environment
exports.APP_PORT = 3000;

exports.isProductionEnvironment = false;

// List of DB connection strings according to enviroment
exports.DB_CONN_STRING = function(){
	// production db
	prod = 'mongodb://localhost:27017/production';

	// testing db
	test = 'mongodb://localhost:27017/test';
	
	conn_string = (this.isProductionEnvironment) ? prod : test;

	return conn_string;
}

// Email credentials and list of recipients for log emails
exports.email = {
	service: 'Gmail',
	user: 'mailservice@therightdoctors.com',
	password: 'trd123456789',
	log_recipients: 'developer@therightdoctors.com,cs@therightdoctors.com'
}