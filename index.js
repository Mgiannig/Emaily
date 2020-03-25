const express = require("express");
const moongose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

moongose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/auth/google/callback


// mongodb+srv://mgianni91:JEANEJyljKTUnsGFlw80@cluster0-aknht.mongodb.net/test?retryWrites=true&w=majority

//id: 788906632631-k43u3uin78loafb46ptc27bl6d0u3knb.apps.googleusercontent.com
//secret: 6_4XX2Qb50IiHTLOYJT0j0_N