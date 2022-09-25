import { useState } from "react";
import Search from "./components/searchbar/searchbar";
import CurrentWeather from "./components/present-weather/present-weather";
import Forecast from "./components/weekreport/weekreport";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./utils/Apidata";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(
    {
    city: "Pune, IN",
    coord: {
      lon: 73.8553,
      lat: 18.5196,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],
    base: "stations",
    main: {
      temp: 22.31,
      feels_like: 22.95,
      temp_min: 22.31,
      temp_max: 22.31,
      pressure: 1011,
      humidity: 90,
      sea_level: 1011,
      grnd_level: 949,
    },
    visibility: 10000,
    wind: {
      speed: 3.04,
      deg: 261,
      gust: 4.2,
    },
    clouds: {
      all: 49,
    },
    dt: 1664117694,
    sys: {
      country: "IN",
      sunrise: 1664067233,
      sunset: 1664110733,
    },
    timezone: 19800,
    id: 1259229,
    name: "Pune",
    cod: 200,
  });
  const [forecast, setForecast] = useState(
    {
    city: {
      id: 8131502,
      name: "Satara",
      coord: {
        lat: 18.5196,
        lon: 73.8553,
      },
      country: "IN",
      population: 0,
      timezone: 19800,
      sunrise: 1664067233,
      sunset: 1664110733,
    },
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1664269200,
        main: {
          temp: 28.12,
          feels_like: 29.75,
          temp_min: 28.12,
          temp_max: 28.12,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 947,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 39,
        },
        wind: {
          speed: 3.47,
          deg: 290,
          gust: 2.94,
        },
        visibility: 10000,
        pop: 0.73,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-27 09:00:00",
      },
      {
        dt: 1664280000,
        main: {
          temp: 25.61,
          feels_like: 26.21,
          temp_min: 25.61,
          temp_max: 25.61,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 947,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 55,
        },
        wind: {
          speed: 3.86,
          deg: 288,
          gust: 4.68,
        },
        visibility: 10000,
        pop: 0.87,
        rain: {
          "3h": 2,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-27 12:00:00",
      },
      {
        dt: 1664290800,
        main: {
          temp: 22.24,
          feels_like: 22.92,
          temp_min: 22.24,
          temp_max: 22.24,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 949,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 56,
        },
        wind: {
          speed: 2.84,
          deg: 266,
          gust: 4.26,
        },
        visibility: 10000,
        pop: 0.83,
        rain: {
          "3h": 1.88,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-27 15:00:00",
      },
      {
        dt: 1664301600,
        main: {
          temp: 21.5,
          feels_like: 22.16,
          temp_min: 21.5,
          temp_max: 21.5,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 949,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 67,
        },
        wind: {
          speed: 2.39,
          deg: 261,
          gust: 3.52,
        },
        visibility: 10000,
        pop: 0.74,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-27 18:00:00",
      },
      {
        dt: 1664312400,
        main: {
          temp: 21.53,
          feels_like: 22.17,
          temp_min: 21.53,
          temp_max: 21.53,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 947,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.17,
          deg: 262,
          gust: 3.23,
        },
        visibility: 10000,
        pop: 0.19,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-27 21:00:00",
      },
      {
        dt: 1664323200,
        main: {
          temp: 21.52,
          feels_like: 22.13,
          temp_min: 21.52,
          temp_max: 21.52,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 947,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 2.01,
          deg: 271,
          gust: 2.92,
        },
        visibility: 10000,
        pop: 0.17,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-28 00:00:00",
      },
      {
        dt: 1664334000,
        main: {
          temp: 23.11,
          feels_like: 23.67,
          temp_min: 23.11,
          temp_max: 23.11,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 949,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 2.16,
          deg: 284,
          gust: 2.58,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-28 03:00:00",
      },
      {
        dt: 1664344800,
        main: {
          temp: 25.82,
          feels_like: 26.34,
          temp_min: 25.82,
          temp_max: 25.82,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 948,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 2.75,
          deg: 271,
          gust: 2.62,
        },
        visibility: 10000,
        pop: 0.36,
        rain: {
          "3h": 0.16,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-28 06:00:00",
      },
      {
        dt: 1664355600,
        main: {
          temp: 27.6,
          feels_like: 29.58,
          temp_min: 27.6,
          temp_max: 27.6,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 946,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 3.72,
          deg: 286,
          gust: 3.34,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.11,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-28 09:00:00",
      },
      {
        dt: 1664366400,
        main: {
          temp: 25.1,
          feels_like: 25.75,
          temp_min: 25.1,
          temp_max: 25.1,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 946,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 63,
        },
        wind: {
          speed: 4.23,
          deg: 279,
          gust: 5.18,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 2.35,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-28 12:00:00",
      },
      {
        dt: 1664377200,
        main: {
          temp: 22.41,
          feels_like: 23.11,
          temp_min: 22.41,
          temp_max: 22.41,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 948,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 2.8,
          deg: 266,
          gust: 4.33,
        },
        visibility: 10000,
        pop: 0.74,
        rain: {
          "3h": 0.66,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-28 15:00:00",
      },
      {
        dt: 1664388000,
        main: {
          temp: 21.75,
          feels_like: 22.43,
          temp_min: 21.75,
          temp_max: 21.75,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 948,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 2.29,
          deg: 262,
          gust: 3.39,
        },
        visibility: 10000,
        pop: 0.6,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-28 18:00:00",
      },
      {
        dt: 1664398800,
        main: {
          temp: 21.34,
          feels_like: 21.98,
          temp_min: 21.34,
          temp_max: 21.34,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 946,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.39,
          deg: 266,
          gust: 3.45,
        },
        visibility: 10000,
        pop: 0.18,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-28 21:00:00",
      },
      {
        dt: 1664409600,
        main: {
          temp: 21.09,
          feels_like: 21.71,
          temp_min: 21.09,
          temp_max: 21.09,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 946,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.72,
          deg: 261,
          gust: 2.26,
        },
        visibility: 10000,
        pop: 0.15,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-29 00:00:00",
      },
      {
        dt: 1664420400,
        main: {
          temp: 23.11,
          feels_like: 23.7,
          temp_min: 23.11,
          temp_max: 23.11,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 949,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 1.96,
          deg: 274,
          gust: 2.24,
        },
        visibility: 10000,
        pop: 0.29,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-29 03:00:00",
      },
      {
        dt: 1664431200,
        main: {
          temp: 26.7,
          feels_like: 28.36,
          temp_min: 26.7,
          temp_max: 26.7,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 948,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 2.37,
          deg: 284,
          gust: 2.47,
        },
        visibility: 10000,
        pop: 0.48,
        rain: {
          "3h": 0.7,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-29 06:00:00",
      },
      {
        dt: 1664442000,
        main: {
          temp: 26.64,
          feels_like: 26.64,
          temp_min: 26.64,
          temp_max: 26.64,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 945,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 3.62,
          deg: 281,
          gust: 4.24,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 3.01,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-29 09:00:00",
      },
      {
        dt: 1664452800,
        main: {
          temp: 24.51,
          feels_like: 25.18,
          temp_min: 24.51,
          temp_max: 24.51,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 946,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 3.89,
          deg: 284,
          gust: 6.33,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.47,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-29 12:00:00",
      },
      {
        dt: 1664463600,
        main: {
          temp: 22.54,
          feels_like: 23.28,
          temp_min: 22.54,
          temp_max: 22.54,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 948,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 2.76,
          deg: 264,
          gust: 4.84,
        },
        visibility: 10000,
        pop: 0.76,
        rain: {
          "3h": 0.7,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-29 15:00:00",
      },
      {
        dt: 1664474400,
        main: {
          temp: 22.08,
          feels_like: 22.8,
          temp_min: 22.08,
          temp_max: 22.08,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 948,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 2.17,
          deg: 262,
          gust: 3.78,
        },
        visibility: 8712,
        pop: 0.62,
        rain: {
          "3h": 2.39,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-29 18:00:00",
      },
      {
        dt: 1664485200,
        main: {
          temp: 21.61,
          feels_like: 22.33,
          temp_min: 21.61,
          temp_max: 21.61,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 946,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.71,
          deg: 254,
          gust: 2.85,
        },
        visibility: 10000,
        pop: 0.73,
        rain: {
          "3h": 9.17,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-29 21:00:00",
      },
      {
        dt: 1664496000,
        main: {
          temp: 21.33,
          feels_like: 22.08,
          temp_min: 21.33,
          temp_max: 21.33,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 947,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.99,
          deg: 296,
          gust: 2.93,
        },
        visibility: 5150,
        pop: 0.77,
        rain: {
          "3h": 11.94,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-09-30 00:00:00",
      },
      {
        dt: 1664506800,
        main: {
          temp: 21.66,
          feels_like: 22.39,
          temp_min: 21.66,
          temp_max: 21.66,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 949,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.7,
          deg: 293,
          gust: 2.42,
        },
        visibility: 10000,
        pop: 0.98,
        rain: {
          "3h": 8.32,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-30 03:00:00",
      },
      {
        dt: 1664517600,
        main: {
          temp: 21.66,
          feels_like: 22.36,
          temp_min: 21.66,
          temp_max: 21.66,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 949,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.98,
          deg: 297,
          gust: 1.28,
        },
        visibility: 9449,
        pop: 0.98,
        rain: {
          "3h": 6.05,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-30 06:00:00",
      },
      {
        dt: 1664528400,
        main: {
          temp: 22.47,
          feels_like: 23.12,
          temp_min: 22.47,
          temp_max: 22.47,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 947,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.52,
          deg: 257,
          gust: 2.97,
        },
        visibility: 10000,
        pop: 0.89,
        rain: {
          "3h": 1.86,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-30 09:00:00",
      },
      {
        dt: 1664539200,
        main: {
          temp: 22.96,
          feels_like: 23.61,
          temp_min: 22.96,
          temp_max: 22.96,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 947,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 2.71,
          deg: 258,
          gust: 4.24,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.24,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-30 12:00:00",
      },
    ],
  });
  // console.log("current", currentWeather);
  // console.log("forecast", forecast);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {forecast && <Forecast data={forecast} />}
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
