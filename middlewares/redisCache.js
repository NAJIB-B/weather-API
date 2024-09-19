const redisClient = require("../redisClient")
const AppError = require("../utils/appError")

module.exports = async(req, res, next)=> {
  try {
    
    const key = req.cacheKey

    if (!redisClient.isOpen) {
      return next(new AppError('Redis connection failed', 500))
    }

    // check the cache if key is present

    const cachedData = await redisClient.get(key)

    const data = JSON.parse(cachedData) 


    if (data) {
      return res.status(200).json({
        data
      })
    }


    next()
  } catch (error) {
   next(new AppError(error, error.status)) 
  }

}

