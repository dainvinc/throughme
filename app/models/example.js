var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('companies', new Schema({
	name:String,
	category:String,
	logo_url:String,
	brief_info:String,
	description:String,
	slug:String,
	awards:String,
	seo_description : String,
	seo_keywords : String,
	created_at : { type : Date},
	updated_at : { type : Date},
	contact : String,
	email : String,

}));