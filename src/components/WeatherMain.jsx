import React from 'react'
import { BsSearch } from "react-icons/bs";
import { TiAdjustBrightness } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import WeatherCards from './WeatherCards';

const WeatherMain = ({ location, data, setLocation, setSearchLocation, getCurrentLocation }) => {

  return (
      <motion.div
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
      >
          <motion.div
              className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center p-4 md:p-6 bg-gray-900/90 rounded-lg shadow-2xl relative backdrop-blur-sm border border-gray-800/50"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
          >
              <motion.h1
                  className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
              >
                  Weather<span className="text-blue-400">Pro</span>
                  <TiAdjustBrightness className='inline w-6 md:w-8 text-blue-400 ml-1' />
              </motion.h1>

              <motion.div
                  className="flex flex-row items-center gap-3 mb-4"
              >
                  <motion.div
                      className="w-full max-w-md flex flex-row items-center py-2 bg-gray-800/50 gap-2 p-1 rounded-3xl shadow-md border border-gray-700/30"
                      whileTap={{ scale: 0.95 }}
                  >
                      <BsSearch className="text-xl md:text-2xl text-bold text-blue-400 ml-2" />
                      <input
                          type="text"
                          className="outline-none flex-1 bg-transparent text-white placeholder-gray-400"
                          placeholder="Enter a location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                  setSearchLocation(location);
                                  setLocation("");
                              }
                          }}
                      />
                  </motion.div>
                  <button
                      className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap text-sm md:text-base flex items-center gap-2"
                      onClick={getCurrentLocation}
                  >
                      <FaLocationDot className="text-sm md:text-base" />
                      <span>Live</span>
                  </button>
              </motion.div>

              {data.name && (
                  <motion.div
                      className="w-full flex flex-col items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                  >
                      <p className='font-light text-gray-300 text-center text-sm md:text-base'>Today's weather in <span className="text-purple-400 text-base md:text-lg ml-1">{data.name + ", " + data.region + ", " + data.country}</span></p>
                      <motion.div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-3 md:mt-4'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}>
                          <img src={data.icon} alt="weather icon" className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-white p-1.5 md:p-2 aspect-square" />
                          <div className="text-center">
                              <p className='text-2xl md:text-3xl text-white'>{data.temp_c} °C</p>
                              <p className="text-lg md:text-xl font-bold text-gray-300">{data.is_day ? data.text + ", Day" : data.text + ", Night"}</p>
                          </div>
                      </motion.div>
                      <div className="w-full mt-4">
                          <WeatherCards data={data} />
                      </div>
                      <p className="text-xs md:text-sm font-bold text-gray-400 mt-4 md:mt-6">Last updated at: &nbsp; {data.localtime}</p>
                  </motion.div>
              )}
          </motion.div>
      </motion.div>
  )
}

export default WeatherMain