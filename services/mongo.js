var MongoClient = require('mongodb').MongoClient;

module.exports.init = function (callback) {
  MongoClient.connect('mongodb://localhost/sport-tracker', function(err, db) {
    module.exports.db = db;
    module.exports.trainings = db.collection('trainings');
  })
};