import { CITIES } from "@/data/cities";
import type { WeatherData, DailyForecast } from "@/types/weather";

const WMO_TEXT: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Light rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Freezing rain",
  67: "Heavy freezing rain",
  71: "Light snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm w/ hail",
  99: "Severe thunderstorm w/ hail",
};

function codeToText(code: number): string {
  return WMO_TEXT[code] ?? "Unknown";
}

function toF(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

function mph(kmh: number): number {
  return Math.round(kmh / 1.60934);
}

function labelFor(index: number, iso: string): string {
  if (index === 1) return "Tomorrow";
  // e.g., "Thu, Nov 13"
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export async function getWeatherData(cityName: string): Promise<WeatherData | null> {
  const coords = CITIES[cityName];
  if (!coords) return null;

  const { lat, lon } = coords; // ✅ use lat/lon

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set("timezone", "auto");
  url.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code"
  );
  url.searchParams.set(
    "daily",
    "weather_code,temperature_2m_max,temperature_2m_min"
  );
  url.searchParams.set("forecast_days", "7");

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) return null;
  const json = await res.json();

  const temp = toF(json.current?.temperature_2m ?? 0);
  const feelsLike = toF(json.current?.apparent_temperature ?? json.current?.temperature_2m ?? 0);
  const humidity = Math.round(json.current?.relative_humidity_2m ?? 0);
  const wind = mph(json.current?.wind_speed_10m ?? 0);
  const code = Number(json.current?.weather_code ?? 0);
  const condition = codeToText(code);

  const dates: string[] = json.daily?.time ?? [];
  const highs: number[] = json.daily?.temperature_2m_max ?? [];
  const lows: number[] = json.daily?.temperature_2m_min ?? [];
  const codes: number[] = json.daily?.weather_code ?? [];

  const daily: DailyForecast[] = dates.slice(1, 4).map((d, i) => ({
    date: d,
    label: labelFor(i + 1, d),
    high: toF(highs[i + 1]),
    low: toF(lows[i + 1]),
    code: codes[i + 1],
    summary: codeToText(codes[i + 1]),
  }));

  const data: WeatherData = {
    city: cityName,
    lat,        // ✅ not latitude
    lon,        // ✅ not longitude
    temp,
    feelsLike,
    humidity,
    wind,
    code,
    condition,
    daily,
  };

  return data;
}
