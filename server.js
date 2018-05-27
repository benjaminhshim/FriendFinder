const express = require('express');
var exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/app/public')));

const htmlRoutes = require(path.join(__dirname, './app/routing/htmlRoutes.js'));
const apiRoutes = require(path.join(__dirname, './app/routing/apiRoutes.js'));

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT);
})