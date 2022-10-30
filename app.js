const express = require("express");
// Envoke express
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notfound = require("./middleware/not-found");
require('dotenv').config();


// MiddleWare - Request Ko filter Karne Ke Liye
app.use(express.json());
app.use(express.static('./public'))


// routes
// using all routes with a single code and with a single syntax - '/api/v1/tasks' which may differ also
app.use("/api/v1/tasks", tasks);
app.use(notfound);


const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // Checking Is Server Working on Reqiured Port
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
