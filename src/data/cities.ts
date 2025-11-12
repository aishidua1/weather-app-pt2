// export interface City {
//   name: string;
//   latitude: number;
//   longitude: number;
// }

// export const CITIES: City[] = [
//   {
//     name: "Durham",
//     latitude: 35.9940,
//     longitude: -78.8986,
//   },
//   {
//     name: "Raleigh",
//     latitude: 35.7796,
//     longitude: -78.6382,
//   },
//   {
//     name: "Chapel Hill",
//     latitude: 35.9132,
//     longitude: -79.0558,
//   },
//   {
//     name: "Charlotte",
//     latitude: 35.2271,
//     longitude: -80.8431,
//   },
//   {
//     name: "New York",
//     latitude: 40.7128,
//     longitude: -74.0060,
//   },
//     {
//     name: "San Francisco",
//     latitude: 37.7749,
//     longitude: -122.4194,
//   },
//   {
//     name: "Chicago",
//     latitude: 41.8781,
//     longitude: -87.6298,
//   },
// ];


// export function getCityByName(name: string): City | undefined {
//   return CITIES.find(
//     (city) => city.name.toLowerCase() === name.toLowerCase()
//   );
// }

// export function getRandomCity(): City {
//   const randomIndex = Math.floor(Math.random() * CITIES.length);
//   return CITIES[randomIndex];
// }






// Make sure this is the exact export:
export const CITIES: Record<string, { lat: number; lon: number }> = {
  Durham: { lat: 35.9940, lon: -78.8986 },
  Raleigh: { lat: 35.7796, lon: -78.6382 },
  "Chapel Hill": { lat: 35.9132, lon: -79.0558 },
  Charlotte: { lat: 35.2271, lon: -80.8431 },
  "New York": { lat: 40.7128, lon: -74.0060 },
  "San Francisco": { lat: 37.7749, lon: -122.4194 },
  Chicago: { lat: 41.8781, lon: -87.6298 },
};
