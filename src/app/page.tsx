"use client";

import { useEffect, useState } from "react";
import  LocationSearch  from "@/components/LocationSearch";
import { LoadingState } from "@/components/LoadingState";
import { ErrorMessage } from "@/components/ErrorMessage";
import  WeatherDisplay  from "@/components/WeatherDisplay";
import { PageHeader } from "@/components/PageHeader";
import { getWeatherData } from "@/lib/getWeather";
import { WeatherData } from "@/types/weather";

// Default city to display on load
const DEFAULT_CITY = "Durham";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCityWeather = async (cityName: string) => {  // ✅ async
    setLoading(true);
    setError("");
    try {
      const data = await getWeatherData(cityName);        // ✅ await
      if (data) {
        setWeather(data);
      } else {
        setError(`Failed to load weather data for ${cityName}`);
      }
    } catch (e) {
      setError(`Failed to load weather data for ${cityName}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCityWeather("Durham"); // or DEFAULT_CITY
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <main className="w-full max-w-2xl space-y-8">
        {/* header + selector */}
        {/* pass cities if you want: cities={Object.keys(CITIES)} */}
        <LocationSearch onCitySelect={loadCityWeather} />
        {loading && <LoadingState />}
        {error && <ErrorMessage message={error} />}
        {weather && !loading && <WeatherDisplay weather={weather} />}
      </main>
    </div>
  );
}
