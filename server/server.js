/**
 * @file server.js
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 *
 * @description Entry point for the DinoApp application
 */
"use strict";

require('dotenv').config();

const loopback = require('loopback')
  , boot = require('loopback-boot')
  , path = require('path')
  , bodyParser = require('body-parser')

let app = module.exports = loopback();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure view handler
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));

// start the web server
app.start = _ =>
  app.listen( _ => {
    app.emit('started');
    let baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      let explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, err => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
