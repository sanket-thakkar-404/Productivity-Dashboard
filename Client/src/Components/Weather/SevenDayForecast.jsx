import { getWeatherIcon } from "../../utils/getWeatherIconMap";

const SevenDayForecast = ({ data }) => {
  return (
    <div className="bg-[#1b2638] h-[87%] mb-10 rounded-3xl p-6 text-white w-full">
      
      <h3 className="text-sm tracking-widest text-gray-400 mb-4">
        7-DAY FORECAST
      </h3>

      {/* LIST */}
      <div className="flex flex-col h-full justify-center">
        {data.map((day, i) => {
          const dayName =
            i === 0
              ? "Today"
              : new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                });

          return (
            <div key={i} className="flex-1 flex flex-col justify-center">
              
              <div className="flex items-center justify-between py-2">
                
                {/* Day */}
                <p className="w-16 text-gray-300">{dayName}</p>

                {/* Icon + condition */}
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={getWeatherIcon(day.description)}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-gray-300">{day.description}</p>
                </div>

                {/* Max / Min */}
                <p className="text-gray-300">
                  <span className="text-white font-medium">
                    {day.maxTemp}
                  </span>
                  /
                  <span className="text-gray-400">
                    {day.minTemp}
                  </span>
                </p>
              </div>

              {/* Divider */}
              {i !== data.length - 1 && (
                <div className="h-1 bg-white/10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;