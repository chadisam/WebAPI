//the role of this file to prepare an object db

const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');
//the following code is required by mongoose group, for the asynchronous 
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose;
//dbConfig.url (because module db.config.js contains url )
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);

//db.student = require('./student.model.js')(mongoose);
//for training purposes, another collection we do same as tutorial but we change the name tutorial to our collection name
module.exports = db;