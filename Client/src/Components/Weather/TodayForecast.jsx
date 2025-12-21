import { getWeatherIcon } from "../../utils/getWeatherIconMap";


const TodayForecast = ({ data }) => {
  return (
    <div className="bg-[#1b2638] h-full rounded-3xl mt-10 p-6 text-white w-full">
      
      <h3 className="text-sm tracking-widest text-gray-400 mb-5">
        TODAY&apos;S FORECAST
      </h3>

      <div className="flex justify-between items-center">
        {data.map((item, i) => {
          const time = new Date(item.dt_txt).toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          });

          return (
            <div
              key={i}
              className="flex flex-col items-center gap-3 flex-1 relative"
            >
              {/* Divider */}
              {i !== 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-14 w-1 bg-white/10" />
              )}

              {/* Time */}
              <p className="text-sm text-gray-300">{time}</p>

              {/* Icon */}
              <img
                src={getWeatherIcon(item.weather[0].main)}
                alt=""
                className="w-10 h-10 object-contain"
              />

              {/* Temp */}
              <p className="text-xl font-semibold">
                {Math.round(item.main.temp)}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayForecast;