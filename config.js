//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://chris5175:thisisatest@ds139360.mlab.com:39360/chrisbrowndb', //place the URI of your mongo database here.
  },

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */

  googleMaps: {
    key: 'AIzaSyAaMJArx8n3JzSHPW_AJl1K9ZmAceQzN6s'
  },
  port: 8080
};