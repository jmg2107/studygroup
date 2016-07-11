'use strict';

//require the modules that we need
var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var bodyParser = require('body-parser');
var Item = require('./server/itemModel.js');

//initialize the app as an express app
var app = express();

//attaches bodyParser to our app. Parses requests so we don't have to
//.json specifies type of files we want
app.use(bodyParser.json());

//renders homepage
//Plug in folder
//If we are asked for any files, it will look here (express.static)

//app.use adds middleware to the app stack
//handles all requests in order

//express.static handles any wildcard routes
app.use(express.static(__dirname + '/compiled/src'));

mongoose.connect('mongodb://localhost/jennica');

app.all('*', function (req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');

  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/', function (req, res) {
  res.render('/');
  res.send("Hello");
});

app.post('/api/list', function (req, res) {
  //add new items to database
  var name = req.body.name;
  var quantity = req.body.quantity;
  var description = req.body.description;

  //new Item made here
  var item = {
    name: name,
    quantity: quantity,
    description: description
  };
  console.log("Server.js line 51", item);

  Item.findOne({ name: name }, function (err, found) {
    if (err) {
      console.log("Bummer ", err);
      res.send(404);
    }
    if (!found) {
      Item.create(item, function (err, item) {
        if (err) {
          console.log("Bummer ", err);
        } else {
          console.log("item created ", item);

          res.send(201, item);
        }
      });
    } else {
      console.log("Item already found");
      Item.update({ name: name }, item, function (err, item) {
        if (!err) {
          console.log("Updated ", item);
          res.send(201, item);
        }
      });
    }
  });
});

app.listen(1337);

console.log("Server is listening on 1337");

//create an Express server to connect
//our front end to the MongoDB database

//to run the server, go to terminal and say mongod

/*

Terminal:
  npm install --save mongoose
  npm install --save nodemon
  npm install --save body-parser

  babel compile : babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline --watch


*/

module.exports = app;
//# sourceMappingURL=data:application/json;base64,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dCB3ZSBuZWVkXG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciBJdGVtID0gcmVxdWlyZSgnLi9zZXJ2ZXIvaXRlbU1vZGVsLmpzJyk7XG5cbi8vaW5pdGlhbGl6ZSB0aGUgYXBwIGFzIGFuIGV4cHJlc3MgYXBwXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG4vL2F0dGFjaGVzIGJvZHlQYXJzZXIgdG8gb3VyIGFwcC4gUGFyc2VzIHJlcXVlc3RzIHNvIHdlIGRvbid0IGhhdmUgdG9cbi8vLmpzb24gc3BlY2lmaWVzIHR5cGUgb2YgZmlsZXMgd2Ugd2FudFxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbi8vcmVuZGVycyBob21lcGFnZVxuLy9QbHVnIGluIGZvbGRlclxuLy9JZiB3ZSBhcmUgYXNrZWQgZm9yIGFueSBmaWxlcywgaXQgd2lsbCBsb29rIGhlcmUgKGV4cHJlc3Muc3RhdGljKVxuXG4vL2FwcC51c2UgYWRkcyBtaWRkbGV3YXJlIHRvIHRoZSBhcHAgc3RhY2tcbi8vaGFuZGxlcyBhbGwgcmVxdWVzdHMgaW4gb3JkZXJcblxuLy9leHByZXNzLnN0YXRpYyBoYW5kbGVzIGFueSB3aWxkY2FyZCByb3V0ZXNcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9jb21waWxlZC9zcmMnKSk7XG5cbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvamVubmljYScpO1xuXG5hcHAuYWxsKCcqJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHvigKhcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTvigKhcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk74oCoXG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnQ29udGVudC1UeXBlJyk74oCoXG4gIG5leHQoKTvigKhcbn0pO1xuXG5hcHAuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgcmVzLnJlbmRlcignLycpO1xuICByZXMuc2VuZChcIkhlbGxvXCIpO1xufSk7XG5cbmFwcC5wb3N0KCcvYXBpL2xpc3QnLCBmdW5jdGlvbihyZXEsIHJlcyl7XG4gIC8vYWRkIG5ldyBpdGVtcyB0byBkYXRhYmFzZVxuICB2YXIgbmFtZSA9IHJlcS5ib2R5Lm5hbWU7XG4gIHZhciBxdWFudGl0eSA9IHJlcS5ib2R5LnF1YW50aXR5O1xuICB2YXIgZGVzY3JpcHRpb24gPSByZXEuYm9keS5kZXNjcmlwdGlvbjtcblxuICAvL25ldyBJdGVtIG1hZGUgaGVyZVxuICB2YXIgaXRlbSA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfTtcbiAgY29uc29sZS5sb2coXCJTZXJ2ZXIuanMgbGluZSA1MVwiLCBpdGVtKTtcblxuXG4gIEl0ZW0uZmluZE9uZSh7IG5hbWU6IG5hbWUgfSwgZnVuY3Rpb24oZXJyLCBmb3VuZCl7XG4gICAgaWYgKGVycil7XG4gICAgICBjb25zb2xlLmxvZyhcIkJ1bW1lciBcIiwgZXJyKTtcbiAgICAgIHJlcy5zZW5kKDQwNCk7XG4gICAgfVxuICAgIGlmICghZm91bmQpe1xuICAgICAgSXRlbS5jcmVhdGUoaXRlbSwgZnVuY3Rpb24oZXJyLCBpdGVtKXtcbiAgICAgICAgaWYgKGVycil7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJCdW1tZXIgXCIsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtIGNyZWF0ZWQgXCIsIGl0ZW0pO1xuXG4gICAgICAgICAgcmVzLnNlbmQoMjAxLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBhbHJlYWR5IGZvdW5kXCIpO1xuICAgICAgSXRlbS51cGRhdGUoeyBuYW1lOiBuYW1lIH0sIGl0ZW0sIGZ1bmN0aW9uKGVyciwgaXRlbSl7XG4gICAgICAgIGlmICghZXJyKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZWQgXCIsIGl0ZW0pO1xuICAgICAgICAgIHJlcy5zZW5kKDIwMSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuYXBwLmxpc3RlbigxMzM3KTtcblxuY29uc29sZS5sb2coXCJTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIDEzMzdcIik7XG5cblxuXG4vL2NyZWF0ZSBhbiBFeHByZXNzIHNlcnZlciB0byBjb25uZWN0XG4vL291ciBmcm9udCBlbmQgdG8gdGhlIE1vbmdvREIgZGF0YWJhc2VcblxuLy90byBydW4gdGhlIHNlcnZlciwgZ28gdG8gdGVybWluYWwgYW5kIHNheSBtb25nb2RcblxuLypcblxuVGVybWluYWw6XG4gIG5wbSBpbnN0YWxsIC0tc2F2ZSBtb25nb29zZVxuICBucG0gaW5zdGFsbCAtLXNhdmUgbm9kZW1vblxuICBucG0gaW5zdGFsbCAtLXNhdmUgYm9keS1wYXJzZXJcblxuICBiYWJlbCBjb21waWxlIDogYmFiZWwgLiAtLW91dC1kaXIgY29tcGlsZWQgLS1wcmVzZXRzPWVzMjAxNSxyZWFjdCAtLWlnbm9yZT1ub2RlX21vZHVsZXMsY29tcGlsZWQgLS1zb3VyY2UtbWFwcyBpbmxpbmUgLS13YXRjaFxuXG5cbiovXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7Il19