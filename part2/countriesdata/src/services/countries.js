import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";

const countriesService = {
  getCountries: async (countryName) => {
    if (countryName === "") {
      return [];
    }
    try {
      const request = axios.get(
        `${baseUrl}/name/${countryName}?fields=name,capital,area,languages,flags`
      );
      const response = await request;
      return response.data;
    } catch (error) {
      return [];
    }
  },
};

export default countriesService;
