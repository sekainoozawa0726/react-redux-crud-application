let express = require('express');

let app = express();

app.get('/events', function(req,res){
  let http = require('http');
  let options = {
    host : 'api.atnd.org',
    port : 80,
    path : '/events/?format=json',
  };
  let result = {};
  http.get(options, function(response) {
    response.setEncoding('utf8');
    let json = "";
    response.on('data',function(d) {
        json += d;
    }).on('end',function() {
        result = JSON.parse(json);
        res.render('events', {
          title: 'atnd event results',
          total_events : result.results_available,
          events : result.events
        });
  });
});

app.get('/event', function(req, res) {
  var eventId = req.query.event_id;

  var http = require('http');
  var options = {
      host : 'api.atnd.org',
      port : 80,
      path : '/events/?format=json&event_id=' + eventId,
  };
  var result = {};
  console.log(result);
  http.get(options, function(response) {
    response.setEncoding('utf8');
    var json = "";
    response.on('data',function(d) {
        json += d;
    }).on('end',function() {
        result = JSON.parse(json);
        res.render('event', {
          title: 'atnd event',
          event : result.events[0]
        });
    });
  }).on('error',function(e) {
      console.log(e);
  });
});
});