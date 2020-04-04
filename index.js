const (
  express = require("express");
  datastore = require('mongodb').MongoClient;
  app = express();
)

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/', function(w, r) {
  r.render('index', {title:'Home Page', message: 'welcome'})
})

app.route('/Node').get(function(w, r) {
  r.render('index', {title: 'Node', message: 'Node JS'})
})
app.route('/Angular').get((w, r) => {
  r.render('index', {title: 'ANGULAR', message: 'Angular JS'})
})

const server = app.listen(3001, () => {})
