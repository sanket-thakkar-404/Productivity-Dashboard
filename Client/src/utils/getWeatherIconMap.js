export const getWeatherIcon = (condition = "") => {
  switch (condition.toLowerCase()) {
    case "clear":
      return "https://cdn-icons-png.freepik.com/512/9755/9755264.png";

    case "clouds":
      return "https://cdn-icons-png.freepik.com/512/414/414927.png";

    case "rain":
    case "drizzle":
      return "https://cdn-icons-png.freepik.com/512/3076/3076129.png";

    case "thunderstorm":
      return "https://cdn-icons-png.freepik.com/512/1146/1146869.png";

    case "snow":
      return "https://cdn-icons-png.freepik.com/512/642/642102.png";

    case "mist":
    case "fog":
    case "haze":
      return "https://cdn-icons-png.freepik.com/512/1779/1779940.png";

    default:
      return "https://cdn-icons-png.freepik.com/512/414/414927.png";
  }
};