// src/nasaApi.js

const fetchAPOD = async ({ date = null, startDate = null, endDate = null, count = null, thumbs = false }) => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    
    // Add query parameters dynamically
    if (date) {
      url += `&date=${date}`;
    } else if (startDate && endDate) {
      url += `&start_date=${startDate}&end_date=${endDate}`;
    } else if (count) {
      url += `&count=${count}`;
    }
  
    if (thumbs) {
      url += `&thumbs=true`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data; // Returning data for use in components
    } catch (error) {
      console.error("Error fetching data from NASA API:", error);
      return null;
    }
  };
  
  export default fetchAPOD;
  