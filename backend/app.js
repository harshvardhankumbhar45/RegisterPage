const express = require("express");
const routes = require('./route/route');
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(express.json());
app.use(cors()); 

app.use("/test", routes);

// Database file has called
require('./db/conn');

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})