// src/App.js

import React, { useEffect, useState } from "react";
import fetchAPOD from "./nasaApi"; // Import the function to fetch data

const App = () => {
  const [apodData, setApodData] = useState(null); // State to store API data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch data when component mounts
    const getAPODData = async () => {
      const data = await fetchAPOD({
        // Example with a specific date or other parameters
        date: "2024-11-08", // Replace with a dynamic date or use null for today
        // startDate: "2024-11-01", 
        // endDate: "2024-11-08",
        count: 3, // Get 3 random images
        thumbs: true, // Get the thumbnail
      });
      setApodData(data); // Store the fetched data in state
      setLoading(false); // Set loading to false once data is fetched
    };

    getAPODData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      <h1 className="text-3xl text-center my-4">NASA Astronomy Picture of the Day</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        apodData && (
          <div className="text-center">
            <h2 className="text-2xl">{apodData.title}</h2>
            <img
              src={apodData.url}
              alt={apodData.title}
              className="w-full max-w-lg mx-auto my-4"
            />
            <p className="text-lg">{apodData.explanation}</p>
            {apodData.copyright && <p className="text-sm">Copyright: {apodData.copyright}</p>}
          </div>
        )
      )}
    </div>
  );
};

export default App;
