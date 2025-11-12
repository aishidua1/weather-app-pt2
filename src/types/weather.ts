/**
 * Weather data types
 *
 * These interfaces define the structure of weather data
 * used throughout the application
 */

export interface WeatherCondition {
  code: number;
  description: string;
}

export interface CurrentWeather {
  temperature: number; // in Fahrenheit
  feelsLike: number; // in Fahrenheit
  humidity: number; // percentage
  windSpeed: number; // in mph
  condition: WeatherCondition;
}

export type DailyForecast = {
  date: string;    // ISO date, e.g. "2025-11-11"
  label: string;   // "Tomorrow", "Thu, Nov 13"
  high: number;    // °F
  low: number;     // °F
  code: number;    // WMO code
  summary: string; // "Partly cloudy", etc.
};

export type WeatherData = {
  city: string;
  lat: number;     // latitude
  lon: number;     // longitude
  temp: number;    // current °F
  feelsLike: number;
  humidity: number; // %
  wind: number;     // mph
  code: number;     // WMO code
  condition: string;
  daily: DailyForecast[];
};

/**
 * WMO Weather interpretation codes
 * Reference: https://open-meteo.com/en/docs
 */
export const WEATHER_CODES: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

export function getWeatherDescription(code: number): string {
  return WEATHER_CODES[code] || "Unknown";
}
