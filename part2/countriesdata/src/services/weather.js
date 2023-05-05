import axios from "axios";

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const geocodeBaseUrl = "http://api.openweathermap.org/geo/1.0/direct?";

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
      return [];
    }
  },
};

export default weatherService;
