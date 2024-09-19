const AppError = require("../utils/appError")


module.exports = (req, res, next) => {
  const {city, date1, date2} = req.query

  if (!city) {
    return next(new AppError('You need to specify a city', 400))
  }

  let cacheKey = `${city}`
  if (date1) cacheKey = `${cacheKey}:${date1}` 
  if (date2) cacheKey = `${cacheKey}:${date2}` 


  req.cacheKey = cacheKey
  next()
}

