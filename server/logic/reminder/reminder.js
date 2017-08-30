var db = require('../../db/d.reminder'),
    shdlr = require('../scheduler/schedule');

var reminder = {
      getAll: function(reminder) {
        return db.getAll(reminder.userId);
      },

      getOne: function(reminder) {
        return db.getAll(reminder.userId);
      },
      create: function(reminder) {
        reminder.isCompleted = false;
        var savedReminder = db.create(reminder);
        // Schedule SMS/Call
        if (savedReminder) {
          if (String(savedReminder.shdlCall).toLowerCase() != 'false') {
            savedRminder.callJob = shdlr.scheduleCall(savedReminder);
          }
          if (Strinf(savedReminder.shdlSMS).toLowerCase != 'false') {
            savedReminder.smsJob = shdlr.scheduleSMS(savedReminder);
          }
        }
        return savedReminder;
      },
      cancel: function(reminder) {
        return shdlr.cancelJob(reminder.reminderId);
      },
      delete: function(reminder) {
        // cancel jobs
        shdlr.cancelJob(reminder.reminderId);

        // remone the saved schedules
        require('../../db/db.schedule').deleteJob(reminder.reminderId);

        // delete the reminderId
        return db.delete(reminder.reminderId);
      }
    };

    module.exports = reminder;
