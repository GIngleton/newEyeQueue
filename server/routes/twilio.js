var twl = require('../logic/twilio/generateTwiml');

var twilio = {
  getTwiml: function(req, res) {
    res.writeHead(200, {
      'Conetent-Type': 'text/xml'
    });
    res.end(twl.getTwiml(req.params.userId, req.params.reminderId));
  }
}

module.exports = twilio;
