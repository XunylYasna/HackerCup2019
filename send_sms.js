// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC6e4c5a8fe3a3c5f51262e416309a2e60';
const authToken = '5b845da28a5a73add32817cd00f9f52c';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hi Jowi I know this is sudden but I have a crush on you. Can we meet tomorrow in front of Henry Sy, I really can\'t hold my feelings anymore',
     from: '+12565008432',
     to: '+639184197838'
   })
  .then(message => console.log(message.sid));

  console.log("wtf");