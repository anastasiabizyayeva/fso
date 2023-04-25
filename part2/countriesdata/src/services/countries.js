import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";

const countriesService = {
  getCountries: async (countryName) => {
    const request = axios.get(
      `${baseUrl}/name/${countryName}?fields=name,capital,area,languages,flags`
    );
    const response = await request;
    console.log(response.data);
    return response.data;
  },
};

export default countriesService;
