import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import TodayForecast from "./TodayForecast";
import AirConditions from "./AirCondition";
import SevenDayForecast from "./SevenDayForecast";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

const groupByDate = (list) =>
  list.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

const buildDailySummary = (grouped) =>
  Object.keys(grouped).map((date) => {
    const items = grouped[date];
    const temps = items.map((i) => i.main.temp);
    return {
      date,
      minTemp: Math.min(...temps),
      maxTemp: Math.max(...temps),
      description: items[0].weather[0].description,
    };
  });

const WeatherWidget = ({ city = "raipur", compact = false }) => {
  const [current, setCurrent] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setCurrent(await currentRes.json());

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();

      setTodayForecast(forecastData.list.slice(0, 6));

      const grouped = groupByDate(forecastData.list);
      setDailyForecast(buildDailySummary(grouped));
    };

    fetchAll();
  }, [city]);

  if (!current) return null;

  return (
    <div className="flex flex-col gap-6 h-full">
      <WeatherCard
        city={current.name}
        temp={current.main.temp}
        condition={current.weather[0].main}
      />

      {!compact && (
        <>
          <TodayForecast data={todayForecast} />
          <AirConditions current={current} />
          <SevenDayForecast data={dailyForecast} />
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
