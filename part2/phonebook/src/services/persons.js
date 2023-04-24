import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const personsService = {
  getAll: async () => {
    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
  },
  create: async (newObject) => {
    const request = axios.post(baseUrl, newObject);
    const response = await request;
    return response.data;
  },
};

export default personsService;
