import { getWeatherIcon } from "../../utils/getWeatherIconMap";


const WeatherCard = ({city , temp , condition}) => {
  return (
    <div className="flex justify-between h-full items-center p-6 rounded-3xl bg-[#0b1220] text-white">
      {/* LEFT */}
      <div>
        <h2 className="text-3xl font-semibold">{city}</h2>
        <h1 className="text-6xl font-bold mt-4">{temp}°</h1>
      </div>

      {/* RIGHT */}
     <img src={getWeatherIcon(condition)} alt={condition}  className=" w-70 object-contain h-60"  />
    </div>
  );
};

export default WeatherCard;
