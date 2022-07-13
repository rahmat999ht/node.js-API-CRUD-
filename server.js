const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const users = require('./src/routes/users.routes')
const rs = require('./src/routes/rs.routes')
const stok = require('./src/routes/stok.routes')

// using as middleware
app.use('/api/v1/users', users)
app.use('/api/v1/rs', rs)
app.use('/api/v1/stok', stok)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});