const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init app
const app = express();

// Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Public folder setup
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index Route
app.get('/', (req,res) => {
    res.render('index');
})

//Catch form submit
app.post('/', (req,res) => {
    // res.send(req.body);
    // console.log(req.body);

    // const number = 639369788867;
    // const message = req.body.text;

    // nexmo.message.sendSms('from', number, message, {type: 'unicode'}, (err, responseData) => {
    //     if(err){
    //         console.log(err);
    //     }

    //     else{
    //         console.dir(responseData);
    //     }
    // })

    const from = 'Farmers Market';
    const to = '639369788867';
    const text = 'Magandang Araw! Mang Tinyo, anong naani natin ngayon? Sabihin ang pangalan ng produkto at kung ilan (halimbawa: Mangga 3 kilo)';

    nexmo.message.sendSms(from, to, text);
})

// Nexmo

const nexmo = new Nexmo({
    apiKey: '75ed7f58',
    apiSecret: 'BBat0hg9DuUP5Mup',
  }, {debug:true});
  


// Define port
const port = 3000;

// Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

