// import { DailyForecast } from "@/types/weather";
// import { WeatherIcon } from "./WeatherIcon";

// interface ForecastCardProps {
//   forecast: DailyForecast[];
// }

// export function ForecastCard({ forecast }: ForecastCardProps) {
//   return (
//     <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800">
//       <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
//         3-Day Forecast
//       </h2>

//       <div className="grid md:grid-cols-3 gap-4">
//         {forecast.map((day, index) => (
//           <div
//             key={day.date}
//             className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 text-center"
//           >
//             <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
//               {index === 0
//                 ? "Tomorrow"
//                 : new Date(day.date).toLocaleDateString("en-US", {
//                     weekday: "short",
//                     month: "short",
//                     day: "numeric",
//                   })}
//             </p>

//             <div className="flex justify-center mb-3">
//               <WeatherIcon code={day.condition.code} size="lg" />
//             </div>

//             <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
//               {day.condition.description}
//             </p>

//             <div className="flex justify-center gap-4">
//               <div>
//                 <p className="text-xs text-zinc-500 dark:text-zinc-500">
//                   High
//                 </p>
//                 <p className="text-xl font-bold text-zinc-900 dark:text-white">
//                   {day.maxTemp}°
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xs text-zinc-500 dark:text-zinc-500">
//                   Low
//                 </p>
//                 <p className="text-xl font-bold text-zinc-900 dark:text-white">
//                   {day.minTemp}°
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import {WeatherIcon} from "./WeatherIcon";
import type { DailyForecast } from "@/types/weather";

type Props = { day: DailyForecast };

export default function ForecastCard({ day }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 text-center">
      <div className="text-sm text-zinc-400">{day.label}</div>

      <div className="flex justify-center my-3">
        {/* ✅ use day.code, not day.condition.code */}
        <WeatherIcon code={day.code} size="lg" />
      </div>

      {/* ✅ use day.summary for text */}
      <p className="text-sm text-zinc-300 mb-3">{day.summary}</p>

      <div className="flex items-center justify-center gap-4 text-sm">
        <div>
          <span className="text-zinc-400">High </span>
          <span className="font-semibold">{day.high}°</span>
        </div>
        <div>
          <span className="text-zinc-400">Low </span>
          <span className="font-semibold">{day.low}°</span>
        </div>
      </div>
    </div>
  );
}
