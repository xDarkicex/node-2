

// simple M.E.A.N STACK //
// M = Mongo
// E = Express
// A = ANGULAR
// N = Node
const express = require("express");
const env = require('dotenv')
const path = require('path')
// datastore consts
const mongodb = require('mongodb');
const datastore = mongodb.MongoClient;
const ObjectID = require("mongodb").ObjectID;
const app = express();
const url = 'mongodb://127.0.0.1:27017/messi_datastore_1';
const login = env.DBUser


// 12 digit hex code ID for mongodb
// var ObjectID = datastore.ObjectID;

datastore.connect(url, (err, client) => {
  if (err != null) {
    console.log("error connecting to datastore", err.stack);
    return
  }
  console.log("connected: ", url);
  var db = client.db(env.DBNAME)
  var cursor = db.collection('User').find();
  cursor.each((err, doc) => {
    if (err != null) {
      console.log("error inside collection Users", err.stack);
      return
    }
    console.log(doc);
  });

  db.collection('User').insertOne({
        _id: new ObjectID(),
        user_name: "generic user"
    });

    client.close();
});

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/', function(w, r) {
  r.render('index', {title:'Home Page', message: 'welcome', content: "Interviews with all the pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg"})
})

app.route('/Node').get(function(w, r) {
  r.render('index', {title: 'Node', message: 'Node JS', content: "Interviews with all the pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg"})
})
app.route('/Angular').get((w, r) => {
  r.render('index', {title: 'ANGULAR', message: 'Angular JS', content: "Interviews with all the pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg"})
})
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(3001, () => {})
