/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_PUBLIC_WEATHER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getWeather(lat: number, lon: number) {
  if (!API_KEY) {
    console.error("API key tidak ditemukan!");
    return null;
  }

  try {
    console.log(`🔍 Mengambil cuaca untuk: lat=${lat}, lon=${lon}`);

    const response = await axios.get(BASE_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("❌ Gagal mengambil data cuaca:", error.response?.data || error.message);
    return null;
  }
}

export async function getCityName(lat: number, lon: number) {
  if (!API_KEY) {
    console.error("API key tidak ditemukan!");
    return "Lokasi Tidak Diketahui";
  }

  try {
    console.log(`📍 Mencari nama kota untuk: lat=${lat}, lon=${lon}`);

    const response = await axios.get("https://api.openweathermap.org/geo/1.0/reverse", {
      params: {
        lat,
        lon,
        limit: 1,
        appid: API_KEY,
      },
    });

    if (response.data.length > 0) {
      return response.data[0].name;
    }
  } catch (error: any) {
    console.error("⚠️ Gagal mendapatkan nama kota:", error.response?.data || error.message);
  }
  return "Lokasi Tidak Diketahui";
}
