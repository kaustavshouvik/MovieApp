const express           = require('express'),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose'),
    passport            = require('passport'),
    LocalStrategy       = require('passport-local'),
    methodOverride      = require('method-override'),
    User                = require('./models/user');

var movieRoutes             = require('./routes/movies'),
    actorRoutes             = require('./routes/actors'),
    userRoutes              = require('./routes/user'),
    recommendationRoutes    = require('./routes/recommendation'),
    indexRoutes             = require('./routes/index');

mongoose.connect('mongodb://localhost/movieappv4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// =====================================================
//      AUTHENTICATION SETUP
app.use(require('express-session')({
    secret: 'Bond, James Bond',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//========================================================

// require('./seedActors')()
// require('./seedMovies')()

//==========================================================

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes)
app.use(movieRoutes)
app.use(actorRoutes)
app.use(recommendationRoutes)
app.use(userRoutes)

//=============================================================================
//SERVER SETUP
app.listen(3000, (req, res) => {
    console.log('SERVER STARTED AT PORT 3000!');
});
//==============================================================================