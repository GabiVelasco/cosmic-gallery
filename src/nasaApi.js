// src/nasaApi.js

const fetchAPOD = async (date = null) => {
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    return null;
  }
};

export default fetchAPOD;
