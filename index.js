const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const userCtrl = require('./controllers/userCtrl')
const config = require('./config')
const profileCtrl = require('./controllers/profileCtrl')

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}


app.use(express.static(__dirname + '/public'));
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret, resave: true,
  saveUninitialized: true,}));
app.use(bodyParser.json());



app.post('/api/login', userCtrl.login)
app.get('/api/profile', profileCtrl.getFriendsProfiles)
app.put('/api/profile', userCtrl.delete)


app.listen(3000, function(){
  console.log('listening on 3000')
})
