import { useState } from "react";
import SearchInput from "../../Components/Weather/SearchInput";
import WeatherWidget from "../../Components/Weather/WeatherWidgets";

const Weather = () => {
  const [city, setCity] = useState("raipur");

  return (
    <div className="bg-[#0b111d] p-5 rounded-3xl h-full text-white weather">
      <SearchInput city={city} setCity={setCity} />
      <WeatherWidget city={city} />
    </div>
  );
};

export default Weather;