const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true
}))


require("./server/config/mongoose.config");

app.use(express.json());
app.use(express.static(__dirname + "/client/static"));
app.set("views", __dirname + "/client/dist/client");
app.use(express.urlencoded({extended: true}));

require("./server/routes/routes")(app);

app.listen(8000, () => console.log("You are on 1955people App"));