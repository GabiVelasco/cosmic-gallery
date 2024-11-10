// src/App.js
import React, { useEffect, useState } from 'react';
import fetchAPOD from './nasaApi';  // Import the function to fetch APOD data

const App = () => {
  const [apodData, setApodData] = useState(null); // Store APOD data
  const [loading, setLoading] = useState(true); // Loading state to show when data is being fetched

  // Function to fetch data for today
  const fetchData = async () => {
    const today = new Date().toISOString().split('T')[0];  // Get today's date in "YYYY-MM-DD" format
    const data = await fetchAPOD(today);  // Pass the current date to the fetchAPOD function
    setApodData(data);  // Store fetched data in state
    setLoading(false);  // Set loading to false when data is fetched
  };

  // useEffect to run fetchData on initial render and set up a 24-hour interval to refetch the data
  useEffect(() => {
    fetchData();  // Fetch data once on initial load

    const intervalId = setInterval(fetchData, 86400000); // Refetch every 24 hours (86400000 ms)

    return () => clearInterval(intervalId); // Cleanup interval when component is unmounted
  }, []);

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center my-8 font-bold">NASA Astronomy Picture of the Day</h1>
      {loading ? (
        <p className="text-center text-lg">Loading...</p> // Show loading text while fetching
      ) : (
        apodData && (
          <div className="text-center max-w-4xl mx-auto my-4">
            <h2 className="text-2xl my-8 font-semibold">{apodData.title}</h2>
            <img
              src={apodData.url}
              alt={apodData.title}
              className="max-w-full h-auto rounded-lg shadow-lg mb-1"
            />
            <p className="text-lg my-8 text-justify">{apodData.explanation}</p>
            <div className="my-8">
              {apodData.copyright && <p className="italic text-sm">Copyright: {apodData.copyright}</p>}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default App;
