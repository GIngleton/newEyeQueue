var client = require('./client');

var call = {
  triggerCall: function(reminder){
    return client.makeCall({to: reminder.user.phone,
    from: '+2014742457',
    url: 'http://4487093a.ngrok.com/call/twiml/' + reminder.user._id + '/' + reminder._id
  }, function(error || response) {
    console.log(error || response);
  });
  }
}

module.exports = call;
