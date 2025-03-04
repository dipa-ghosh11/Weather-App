import { motion } from "framer-motion";
import { WiHumidity, WiStrongWind, WiBarometer, WiDaySunny, WiRain, WiFog } from "react-icons/wi";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WeatherCards = ({ data }) => {
    const cards = [
        { 
            label: "Humidity", 
            value: `${data.humidity}%`, 
            gradient: "from-blue-500/20 to-indigo-500/20",
            icon: <WiHumidity className="text-2xl md:text-3xl text-blue-400" />
        },
        { 
            label: "Wind", 
            value: `${data.wind_mph} mph`, 
            gradient: "from-green-500/20 to-teal-500/20",
            icon: <WiStrongWind className="text-2xl md:text-3xl text-green-400" />
        },
        { 
            label: "Pressure", 
            value: `${data.pressure_mb} mb`, 
            gradient: "from-purple-500/20 to-pink-500/20",
            icon: <WiBarometer className="text-2xl md:text-3xl text-purple-400" />
        },
        { 
            label: "UV index", 
            value: data.uv, 
            gradient: "from-yellow-500/20 to-orange-500/20",
            icon: <WiDaySunny className="text-2xl md:text-3xl text-yellow-400" />
        },
        { 
            label: "Precipitation", 
            value: `${data.precip_mm} mm`, 
            gradient: "from-red-500/20 to-rose-500/20",
            icon: <WiRain className="text-2xl md:text-3xl text-red-400" />
        },
        { 
            label: "Visibility", 
            value: `${data.vis_km} km`, 
            gradient: "from-cyan-500/20 to-blue-500/20",
            icon: <WiFog className="text-2xl md:text-3xl text-cyan-400" />
        },
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4"
        >
            {cards.map((item, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`p-3 md:p-4 rounded-xl shadow-lg text-white text-center bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300`}
                    whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-sm md:text-base font-semibold text-gray-300">{item.label}</p>
                            <p className="text-lg md:text-xl font-bold text-white mt-0.5">{item.value}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default WeatherCards;
