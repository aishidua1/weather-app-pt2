import WeatherCard from "./WeatherCard";
import { Button } from "./ui/Button";
import type { WeatherData } from "@/types/weather";

/** Displays weather information with a link to detailed forecast */
interface WeatherDisplayProps {
  weather: WeatherData | null; // allow null during loading
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  if (!weather) return null; // defensive guard

  return (
    <div className="flex flex-col items-center space-y-6">
      <WeatherCard city={weather.city} weather={weather} />

      {/* Link to detailed weather */}
      <Button href={`/weather/${weather.city.toLowerCase()}`} variant="default">
        View Detailed Forecast
      </Button>
    </div>
  );
}
