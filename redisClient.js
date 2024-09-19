const AppError = require("./utils/appError")

const redis = require("redis");


const redisClient = redis.createClient({
  url: "redis://default:eTYblfuFYpj4NgyKFjBS24pUhTiCzt6R@redis-12289.c16.us-east-1-2.ec2.redns.redis-cloud.com:12289",
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
