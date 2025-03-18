import { create } from "zustand";
import { getWeather, getCityName } from "../utils/weatherApi";

interface WeatherState {
  weather: string | null;
  temperature: number | null;
  location: string;
  lat: number | null;
  lon: number | null;
  hasFetched: boolean;
  fetchWeather: (lat: number, lon: number) => Promise<void>;
  fetchUserLocationWeather: () => Promise<void>;
  resetFetchStatus: () => void;
}

export const useWeatherStore = create<WeatherState>((set, get) => ({
  weather: null,
  temperature: null,
  location: "",
  lat: null,
  lon: null,
  hasFetched: false,

  fetchWeather: async (lat = -6.2088, lon = 106.8456) => {
    if (get().hasFetched) return;
    set({ hasFetched: true });

    try {
      const weatherData = await getWeather(lat, lon);
      const cityName = await getCityName(lat, lon);

      if (weatherData) {
        set({
          weather: weatherData.weather[0].main,
          temperature: Math.round(weatherData.main.temp),
          location: cityName,
          lat,
          lon,
        });
      }
    } catch (error) {
      console.error("❌ Gagal mengambil data cuaca:", error);
    }
  },

  fetchUserLocationWeather: async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          await get().fetchWeather(latitude, longitude);
        },
        async () => {
          console.warn("⚠️ Izin lokasi ditolak, menggunakan Jakarta.");
          await get().fetchWeather(-6.2088, 106.8456);
        }
      );
    } else {
      await get().fetchWeather(-6.2088, 106.8456);
    }
  },
  
  resetFetchStatus: () => set({ hasFetched: false }),
}));