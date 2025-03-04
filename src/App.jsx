import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import WeatherMain from './components/WeatherMain';

function App() {
  const [location, setLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [data, setData] = useState({});
  const API_ID = import.meta.env.VITE_API_ID;
  const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_ID}&q=${searchLocation}&days=3`;

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GEO_API_KEY}`)
        .then(res => {
          const locationName = res.data.results[0].address_components[3].long_name;
          setSearchLocation(locationName);
          setLocation(locationName);
        })
        .catch(err => console.log(err.message));
    });
  };

  useEffect(() => {
    if (searchLocation) {
      axios.get(url)
        .then(res => {
          const { temp_c, is_day, wind_mph, humidity, pressure_mb, uv, precip_mm, vis_km, condition: { text, icon } } = res.data.current;
          const { name, region, country, localtime } = res.data.location;

          setData({ temp_c, humidity, pressure_mb, wind_mph, name, region, country, is_day, text, icon, uv, precip_mm, vis_km, localtime });
        })
        .catch(err => console.log(err.message));
    }
  }, [searchLocation]);

  return (
    <WeatherMain 
      location={location} 
      data={data} 
      setLocation={setLocation} 
      setSearchLocation={setSearchLocation} 
      getCurrentLocation={getCurrentLocation} 
    />
  );
}

export default App;

