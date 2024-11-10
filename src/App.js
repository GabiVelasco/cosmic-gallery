// src/App.js
import React, { useEffect, useState } from 'react';
import fetchAPOD from './nasaApi';  // Import the function to fetch APOD data
import Footer from './footer';  // Import the Footer component

require('dotenv').config();



const App = () => {
  const [apodData, setApodData] = useState([]); // Store APOD data for multiple days
  const [loading, setLoading] = useState(true); // Loading state to show when data is being fetched

  // Function to fetch APOD data for a given date
  const fetchData = async (date) => {
    const data = await fetchAPOD(date); // Pass the date to the fetchAPOD function
    return data;
  };

  // Function to get formatted dates for the last 4 days (today, yesterday, day before yesterday, three days ago)
  const getLastFourDays = () => {
    const dates = [];
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i); // Subtract i days from the current date
      const formattedDate = date.toISOString().split('T')[0]; // Format the date as "YYYY-MM-DD"
      dates.push(formattedDate);
    }
    return dates;
  };

  // useEffect to run fetchData on initial render for the last 4 days and set up a 24-hour interval to refetch the data
  useEffect(() => {
    const dates = getLastFourDays(); // Get the dates for the last 4 days
    const fetchAllData = async () => {
      setLoading(true); // Set loading to true while fetching
      const allData = await Promise.all(dates.map(date => fetchData(date))); // Fetch data for all days
      setApodData(allData); // Store all the fetched data
      setLoading(false); // Set loading to false when data is fetched
    };
    
    fetchAllData(); // Fetch data for the last 4 days

    const intervalId = setInterval(fetchAllData, 86400000); // Refetch every 24 hours (86400000 ms)

    return () => clearInterval(intervalId); // Cleanup interval when component is unmounted
  }, []);

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center my-8 font-bold">NASA Astronomy Picture of the Day</h1>
      {loading ? (
        <p className="text-center text-lg">Loading...</p> // Show loading text while fetching
      ) : (
        <div className="w-full max-w-4xl mx-auto">
          {apodData.map((data, index) => (
            <div key={index} className="text-center my-8">
              <h2 className="text-2xl font-semibold">{`APOD for ${index === 0 ? 'Today' : (index === 1 ? 'Yesterday' : (index === 2 ? 'Day Before Yesterday' : 'Three Days Ago'))}`}</h2>
              {data ? (
                <>
                  <img
                    src={data.url}
                    alt={data.title}
                    className="max-w-full h-auto rounded-lg shadow-lg my-4"
                  />
                  <p className="text-lg text-justify">{data.explanation}</p>
                  {data.copyright && (
                    <p className="italic text-sm mt-4">{`Copyright: ${data.copyright}`}</p>
                  )}
                </>
              ) : (
                <p className="text-lg">No data available for this day.</p>
              )}
            </div>
          ))}
        </div>
      )}
        {/* Add the Footer component here */}
        <Footer />
    </div>
  );
};

export default App;
