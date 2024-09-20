const axios = require("axios");

const redisClient = require("../redisClient");
const AppError = require("../utils/appError");

module.exports = async (req, res, next) => {
  try {
    const { city, date1, date2 } = req.query;
    let query = `${city}`;
    if (date1) query = `${query}/${date1}`;
    if (date2) query = `${query}/${date2}`;

    const apiUrl = process.env.API_URL.replace(
      "<password>",
      process.env.API_PASSWORD,
    ).replace("<query>", query);

    const response = await axios.get(apiUrl);

    const key = req.cacheKey;

    const data = response.data;

    await redisClient.set(key, JSON.stringify(data), {
      EX: 60000
    });
  

    res.status(200).json({
      message: "success",
      data,
    });
} catch (error) {
    next(new AppError(error, error.status));
  }
};
