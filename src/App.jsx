import { useEffect, useState } from 'react'
import './App.css'
import WeatherComponent from './components/weatherComponent'
import axios from 'axios'

function App() {
  
  const [location, setLocation]=useState("Bardhaman");
  const [data, setData]=useState({});
  // const API_KEY = import.meta.env.API_KEY;
  const url =`https://api.weatherapi.com/v1/forecast.json?key=2712d65d54824df2a7285307250303&q=${location}`;

  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      // console.log(res.data);
      // // const {data}=res;
      // setData(data);
      // console.log(data)
    })
    .catch(err=>console.log(err))
  },[location])
  return (
    <>
      <div>
       <WeatherComponent data={data} location={location} setLocation={setLocation}/>
        
      </div>
    </>
  )
}

export default App
