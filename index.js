const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 5500
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app. set ('view engine', 'ejs');
app. set ('views', path.join(__dirname, 'views'));
var contactList=[
       {name: "Arpan",
       phone: "1111111111"},
       {name: "Tony Stark",
       phone: "1234567890"},
      { name: "Coding Ninjas",
       phone: "2316537634"}
    ]
app.get('/', function(req, res){
    return res.render ('home',{
       title: "Contacts List",
       contact_list: contactList
    });
});

app.post("/create", function(req, res){
    res.send(req.body)
    console.log(req.body)
})

app.get('/profile', function(req, res){
    res.render('profile');
});

app.post('/profile', function(req, res){
    res.send( req.body);
    console.log(req.body);
});

app. listen(port, function(err){
    if (err){console.log('Error in running the server', err)}
    console. log(`Yup!My Express Server is running on Port:${port}`)
})