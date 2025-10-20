import type { MatjipType } from '@/types';

function toRad(value: number) {
  return (value * Math.PI) / 180;
}

interface CalculateDistanceType {
  lat1: number;
  lng1: number;
  lat2: number;
  lng2: number;
}

function calculateDistance({ lat1, lng1, lat2, lng2 }: CalculateDistanceType) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  const l1 = toRad(lat1);
  const l2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

export function sortMatjipsByDistance(matjips: MatjipType[], lat: number, lon: number) {
  const sortedMatjips = [...matjips];
  sortedMatjips.sort((a, b) => {
    const distanceA = calculateDistance({ lat1: lat, lng1: lon, lat2: a.lat, lng2: a.lon });
    const distanceB = calculateDistance({ lat1: lat, lng1: lon, lat2: b.lat, lng2: b.lon });
    return distanceA - distanceB;
  });
  return sortedMatjips;
}
