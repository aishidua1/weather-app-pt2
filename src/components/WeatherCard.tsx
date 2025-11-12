// import { WeatherIcon } from "./WeatherIcon";
// import { CurrentWeather } from "@/types/weather";

// /**
//  * Displays current weather information in a clean card format
//  */

// interface WeatherCardProps {
//   city: string;
//   weather: CurrentWeather;
//   current: number;
// }

// export function WeatherCard({ city, weather }: WeatherCardProps) {
//   return (
//     <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 w-full max-w-md border border-zinc-200 dark:border-zinc-800">
//       <div className="text-center space-y-6">
//         {/* City name */}
//         <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
//           {city}
//         </h2>

//         {/* Weather icon */}
//         <div className="flex justify-center">
//           <WeatherIcon code={weather.condition.code} size="xl" />
//         </div>

//         {/* Temperature */}
//         <div>
//           <div className="text-6xl font-bold text-zinc-900 dark:text-white">
//             {weather.temperature}°F
//           </div>
//           <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-2">
//             {weather.condition.description}
//           </p>
//         </div>

//         {/* Additional details */}
//         <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
//           <div className="text-center">
//             <p className="text-sm text-zinc-500 dark:text-zinc-500">
//               Feels like
//             </p>
//             <p className="text-lg font-semibold text-zinc-900 dark:text-white">
//               {weather.feelsLike}°F
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-sm text-zinc-500 dark:text-zinc-500">Humidity</p>
//             <p className="text-lg font-semibold text-zinc-900 dark:text-white">
//               {weather.humidity}%
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-sm text-zinc-500 dark:text-zinc-500">Wind</p>
//             <p className="text-lg font-semibold text-zinc-900 dark:text-white">
//               {weather.windSpeed} mph
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import type { WeatherData } from "@/types/weather";
import { WeatherIcon } from "./WeatherIcon";

type WeatherCardProps = {
  city: string;
  weather: WeatherData; // full shape
};

export default function WeatherCard({ city, weather }: WeatherCardProps) {
  const { temp, feelsLike, humidity, wind, condition, code } = weather;

  return (
    <div>
      {/* City name */}
      <h2 className="text-3xl font-bold text-white">{city}</h2>

      {/* Weather icon */}
      <div className="flex justify-center">
        <WeatherIcon code={code} size="xl" />
      </div>

      {/* Temperature */}
      <div className="text-6xl font-bold text-white">{temp}°F</div>
      <p className="text-xl text-zinc-300 mt-2">{condition}</p>

      {/* Details */}
      <div className="grid grid-cols-3 gap-4 mt-6 border-t border-white/10 pt-4">
        <div className="text-center">
          <div className="text-sm text-zinc-400">Feels Like</div>
          <div className="text-lg font-semibold">{feelsLike}°F</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-zinc-400">Humidity</div>
          <div className="text-lg font-semibold">{humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-zinc-400">Wind</div>
          <div className="text-lg font-semibold">{wind} mph</div>
        </div>
      </div>
    </div>
  );
}
