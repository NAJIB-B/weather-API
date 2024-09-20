# Weather API

## Overview

This is a Node.js and Express application that provides weather data for a specified city or country. It features Redis for caching API responses to improve performance and reduce unnecessary API calls. Additionally, rate limiting is implemented to protect the API from abuse.

## Features

- **Express.js**: Web framework for building the server.
- **Redis**: In-memory data structure store used for caching weather data.
- **Axios**: HTTP client used for making API requests to the weather service.
- **Rate Limiting**: Limits the number of requests per IP within a certain timeframe to prevent abuse.

## Prerequisites

Before running this project, ensure you have the following installed on your local machine:

- **Node.js**: v14.x or higher
- **Redis**: v6.x or higher
- **npm**: Node package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NAJIB-B/Weather-API
   cd Weather-API
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   API_URL=your_weather_api_base_url
   API_PASSWORD=your_weather_api_key
   REDIS_CONNECTION_URL=your_redis_connection_url (from redis cloud mainly. but you can edit code as required if you don't want to use redis cloud)
   ```

## Running the Project

To start the application, run:

```bash
npm start
```

## API Endpoints

- **GET /api/v1/weather<options> 

  - **city: This query is required. it could be a city name or a country name
  - Example: `GET /api/v1/weather?city=Cairo`

  - **date1: This query is optional. it is the specific date you want to check the weather for. it takes this format yyyy-mm-dd
  - Example: `GET /api/v1/weather?city=Cairo&date1=2001-10-27`

  - **date2: This query is optional, and date1 must be present if you are specifying date2. it format is the same as date1. if you specify this, it returns the weather data from date1 to date2 inclusive.
  - Example: `GET /api/v1/weather?city=Cairo&date1=2001-10-27&date2=2007-10-27`


### Response

The response includes the weather data in JSON format. Example:

```json
{
  "message": "success",
  "data": {
    // Weather data
  }
}
```

## Project Source

- **https://roadmap.sh/projects/weather-api-wrapper-service**
