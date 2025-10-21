import { useFetch, useLikedMatjips } from '@/hooks';
import type { MatjipType } from '@/types';
import { MatjipCard } from '@/components';
import { useEffect, useState } from 'react';
import { sortMatjipsByDistance } from '@/utils';

export function MatjipList() {
  const { data: matjips, loading: matjipLoading, error } = useFetch<MatjipType[]>('/places');
  const { liked, toggleLikedMatjip, loading: likedLoading } = useLikedMatjips();
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [sortedMatjips, setSortedMatjips] = useState<MatjipType[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        console.error(err, ': 위치 가져오기에 실패했습니다');
        setUserLocation(null);
      },
    );
  }, []);

  useEffect(() => {
    if (matjips && userLocation) {
      const sorted = sortMatjipsByDistance(matjips, userLocation.lat, userLocation.lon);
      setSortedMatjips(sorted);
    } else if (matjips) {
      setSortedMatjips(matjips);
    }
  }, [matjips, userLocation]);

  if (matjipLoading || likedLoading) return <p className='message'>로딩 중입니다...</p>;
  if (error) {
    if (error.message.includes('404')) {
      return <p>404 error: 요청하신 데이터를 찾을 수 없습니다다</p>;
    }
    return <p className='message'>에러가 발생했습니다! 다시 시도해주세요.</p>;
  }

  const isLiked = (id: string) => Array.isArray(liked) && liked.some((l) => !!l && l.id === id);

  return (
    <div className='grid-list'>
      {Array.isArray(sortedMatjips) && sortedMatjips.length > 0 ? (
        sortedMatjips?.map((matjip) => (
          <MatjipCard
            key={matjip.id}
            matjip={matjip}
            isLiked={isLiked(matjip.id)}
            onToggleLiked={() => toggleLikedMatjip(matjip)}
          />
        ))
      ) : (
        <p>등록된 맛집이 없습니다.</p>
      )}
    </div>
  );
}
