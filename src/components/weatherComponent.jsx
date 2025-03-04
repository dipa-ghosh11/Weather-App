import React from 'react'

const WeatherComponent = ({data , location, setLocation}) => {
  return (
      <div>
        <h1>Weather App</h1>
        <div>
        {/* <img src={data.current.condition.icon} alt="" /> */}
        <input type="text" placeholder='Enter city name' value={location } onChange={(e)=>{setLocation(e.target.value)}}/>
        <button>Search</button>
        </div>
        
        <p>Today's weather in</p>
        <div>
          <img src="" alt="" />
          <div>
            <p>23°C</p>
            <p>clear,Night</p>
          </div>
        </div>
      </div>
  )
}

export default WeatherComponent