const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '75ed7f58',
  apiSecret: 'BBat0hg9DuUP5Mup',
});

const from = 'Farmers Market';
const to = '639369788867';
const text = 'Magandang Araw! Mang Tinyo, anong naani natin ngayon? Sabihin ang pangalan ng produkto at kung ilan (halimbawa: Mangga 3 kilo)';

nexmo.message.sendSms(from, to, text);