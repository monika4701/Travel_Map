const express = require("express");
const app = express();
const mongoose = require("mongoose");
const pinRoute= require("./routes/pins");
const userRoute = require("./routes/users");
//so that env file will work
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.listen(8800, () => {
    console.log("Backend server is running!!");
  });
  
  mongoose 
  .connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,   })   
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

  app.use("/api/pins", pinRoute);
  app.use("/api/users", userRoute);