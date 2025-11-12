import { notFound } from "next/navigation";
import { CITIES } from "@/data/cities";
import { getWeatherData } from "@/lib/getWeather";
import WeatherDisplay from "@/components/WeatherDisplay";

type Props = { params: { location: string } };

export default async function CityPage({ params }: Props) {
  // slug from URL, e.g. "durham"
  const slug = decodeURIComponent(params.location || "");

  // find a key in CITIES that matches slug (case-insensitive)
  const matchedName =
    Object.keys(CITIES).find((name) => name.toLowerCase() === slug.toLowerCase()) || null;

  if (!matchedName) {
    // unknown city => 404
    notFound();
  }

  // fetch weather for the matched city name
  const data = await getWeatherData(matchedName);
  if (!data) {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <main className="w-full max-w-5xl space-y-8">
        <WeatherDisplay weather={data} />
      </main>
    </div>
  );
}
