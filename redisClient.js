const AppError = require("./utils/appError")

const redis = require("redis");

require("dotenv").config()

const redisClient = redis.createClient({
  url: process.env.REDIS_CONNECTION_URL,
});

redisClient.on("error", (error) => {
  console.log("error from redis", error) 
  throw error
});

redisClient
  .connect()
  .then(() => console.log("redis client connected successfully"))
  .catch((err) => { throw err });

module.exports = redisClient
