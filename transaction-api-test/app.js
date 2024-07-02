const express = require('express');
const app = express();
const cors = require('cors');
const testRoute = require('./routes/testRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const port = 3000;

app.use(cors());
app.use("/test", testRoute);
app.use("/transactions",transactionRoutes)


app.listen(port, function () {
    console.log('Example app listening on port 3000!')
  })