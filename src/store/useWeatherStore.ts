import { create } from "zustand";
import { getWeather, getCityName } from "../utils/weatherApi";

interface WeatherState {
  weather: string | null;
  location: string;
  fetchWeather: (lat?: number, lon?: number) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  location: "",

  fetchWeather: async (lat = -6.2088, lon = 106.8456) => {
    try {
      const weatherData = await getWeather(lat, lon);
      const cityName = await getCityName(lat, lon);

      if (weatherData) {
        set({
          weather: weatherData.weather[0].main,
          location: cityName,
        });
      }
    } catch (error) {
      console.error("❌ Gagal mengambil data cuaca:", error);
    }
  },
}));