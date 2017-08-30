var express = require('express'),
    router = express.Router(),
    auth = require('./auth'),
    reminder = require('./reminder'),
    twilio = require('./twilio');

// AUTH routes
router.post('/api/v1/auth/register', auth.register);
router.post('/api/v1/auth/login', auth.login);

// REMINDER rotues
router.get('/api/v1/reminders/:userId', reminder.getAll);
router.get('/api/v1/reminder/:userId/:reminderId', reminder.getOne);
router.post('/api/v1/reminder/:userId/create', reminder.create);
router.put('/api/v1/reminder/:userId/:reminderId/cancel', reminder.cancel);
router.delete('/api/v1/reminder/:userId/:reminderId', reminder.delete);

// TWILIO Call route - TWIML Response
router.post('/call/twiml/:userId/:remiinderId', twilio.getTwiml);

module.exports = router;