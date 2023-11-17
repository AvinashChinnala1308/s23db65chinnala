var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )


require('dotenv').config();
const connectionString = process.env.MONGO_CON
console.log(connectionString);
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });



  var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

var organizations = require('./models/organizations');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var organizationsRouter = require('./routes/organizations');
const boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');



var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/organizations', organizationsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter);

var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(function(req, res, next) {
  next(createError(404));
});



var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};



  res.status(err.status || 500);
  res.render('error');
});





async function recreateDB() {
  await organizations.deleteMany();

  let e1 = new organizations({  organizationName: 'Bosch Global Software Technologies',
  location: 'Hyderabad, India',
  industry: 'Technology',
  numberOfEmployees: 3000,
  revenue: 50000000,
  website: 'https://www.bosch-softwaretechnologies.com/en/our-company/about-us/'});
  e1.save().then(doc => {
    console.log("First object saved")
  }).catch(err => {
    console.error(err)
  });

  let e2 = new organizations({organizationName: 'Wipro',
  location: 'Whitefields, India',
  industry: 'Technology',
  numberOfEmployees: 50000,
  revenue: 7000000, 
  website: 'https://www.wipro.com/' });
  e2.save().then(doc => {
    console.log("Second object saved")
  }).catch(err => {
    console.error(err)
  });

  let e3 = new organizations({ 
    organizationName: 'Apps Associates',
    location: 'Uppal, Inida',
    industry: 'Technology',
    numberOfEmployees: 5000,
    revenue: 7000000,
    website: 'https://appsassociates.com/'});
  e3.save().then(doc => {
    console.log("Third object saved")
  }).catch(err => {
    console.error(err)
  });

}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;

