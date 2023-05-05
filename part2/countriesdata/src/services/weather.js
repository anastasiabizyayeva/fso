import axios from "axios";

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const geocodeBaseUrl = "http://api.openweathermap.org/geo/1.0/direct?";
const weatherBaseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const weatherService = {
  getLongitudeLatitude: async (capital) => {
    if (capital === "") {
      return [];
    }
    try {
      const request = axios.get(
        `${geocodeBaseUrl}q=${capital}&limit=1&appid=${openWeatherKey}`
      );
      const response = await request;
      const latitude = response.data[0].lat;
      const longitude = response.data[0].lon;

      return [latitude, longitude];
    } catch (error) {
      console.log("Error getting latitude and longitude so can't get weather.");
      return [];
    }
  },
  getCapitalWeather: async ([latitude, longitude]) => {
    if (longitude && latitude) {
      try {
        const request = axios.get(
          `${weatherBaseUrl}lat=${latitude}&lon=${longitude}&appid=${openWeatherKey}&units=metric`
        );
        const response = await request;
        return response.data;
      } catch (error) {
        console.log(
          "Got latitude and longitude, but couldn't get city weather."
        );
        return [];
      }
    } else {
      console.log(latitude);
      console.log(longitude);
      console.log(
        "Couldn't find latitude and longitude so not making weather call."
      );
      return [];
    }
  },
};

export default weatherService;
