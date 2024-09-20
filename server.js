const express = require("express");
const {rateLimit} = require("express-rate-limit")

const getFromApi = require('./middlewares/getFromApi')
const querySorter = require("./middlewares/querySorter")
const checkCache = require("./middlewares/redisCache")

require("dotenv").config()

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: 'You have reached your limit for using this Api. Please try again after a while'
})

app.use(limiter)

app.get("/api/v1/weather", querySorter, checkCache, getFromApi);

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack
  })
})


const port = 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

