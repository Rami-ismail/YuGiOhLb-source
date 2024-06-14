import axios from "axios";

const baseUrl = process.env.CARD_API_BASEURL;

export const fetchCards = async (query: string) => {
  try {
    const response = await axios.get(`${baseUrl}${query}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
