import axios from "axios";

// Base URL
export const baseURL = "https://real-estate-app3.p.rapidapi.com";

// Fetch Data from API
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "real-estate-app3.p.rapidapi.com",
    },
  });

  return data;
};
