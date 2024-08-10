import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EarthquakeReport.css';

function EarthquakeReport() {
  const [location, setLocation] = useState(null);
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (location) {
      const fetchEarthquakeData = async () => {
        try {
          const response = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query', {
            params: {
              format: 'geojson',
              latitude: location.latitude,
              longitude: location.longitude,
              maxradiuskm: 100, // Search within 100 km radius
              starttime: '2020-01-01', // Adjust time range as needed
              endtime: new Date().toISOString()
            }
          });
          setEarthquakeData(response.data);
        } catch (err) {
          setError('Failed to fetch earthquake data.');
        }
      };

      fetchEarthquakeData();
    }
  }, [location]);

  return (
    <>
    
    <div className="earthquake-report-card">
      
      {error && <p>Error: {error}</p>}
      {location && (
        <p className="location">
          Your Location: Latitude {location.latitude}, Longitude {location.longitude}
        </p>
      )}
      <div className="history">
        {earthquakeData && earthquakeData.features.length > 0 ? (
          <>
            <h2>Recent Earthquakes Near You:</h2>
            <ul>
              {earthquakeData.features.map((quake, index) => (
                <li key={index}>
                  <p><strong>Magnitude:</strong> {quake.properties.mag}</p>
                  <p><strong>Location:</strong> {quake.properties.place}</p>
                  <p><strong>Date:</strong> {new Date(quake.properties.time).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="no-history">No significant earthquake history found in your region.</p>
        )}
      </div>
      {/* <a href="#" className="btn-primary">Go somewhere</a> */}
    </div>
    {/* <h1 style={{ marginRight: "150px", backgroundColor: "none", color: "white"}}>Earthquake Historian!</h1> */}
    </>
  );
}

export default EarthquakeReport;
