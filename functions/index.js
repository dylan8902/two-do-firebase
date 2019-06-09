const functions = require('firebase-functions');

exports.reminders = functions.pubsub
  .topic('reminders')
  .onPublish((message) => {
    console.log('A message on the reminders topic');
    if (message.json) {
      console.log('Message Data: ', message.json);
    }
    return true;
  });

