import { useMatjipStore } from '@/store';
import type { MatjipType } from '@/types';
import { useEffect, useState } from 'react';

export const useLikedMatjips = () => {
  const { liked, setLiked, addLiked, removeLiked } = useMatjipStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/users/places');
        if (!res.ok) throw new Error('찜한 맛집을 불러오지 못 했습니다');
        const data = await res.json();

        const placeData = Array.isArray(data) ? data : data.places;
        const safePlaces = Array.isArray(placeData) ? placeData.filter((m) => !!m && !!m.id) : [];

        if (safePlaces.length > 0) setLiked(safePlaces);
      } catch (err) {
        setError(err as Error);
        console.error(err, ': 에러로 인해 로딩에 실패했습니다');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const toggleLikedMatjip = async (matjip: MatjipType) => {
    if (!matjip || !matjip.id) return;

    const isLiked = liked.some((l) => l.id === matjip.id);

    try {
      if (isLiked) {
        await fetch(`/users/places/${matjip.id}`, { method: 'DELETE' });
        removeLiked(matjip.id);
      } else {
        console.log('Posting matjip:', matjip);
        await fetch(`/users/places`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(matjip),
        });
        addLiked(matjip);
      }
    } catch (err) {
      console.error(err, ': 에러가 발생했습니다');
    }
  };

  const removeLikedMatjip = async (id: string) => {
    try {
      await fetch(`/users/places/${id}`, { method: 'DELETE' });
      removeLiked(id);
    } catch (err) {
      console.error(err, ': 삭제 실패했습니다');
    }
  };

  return { liked, loading, error, toggleLikedMatjip, removeLikedMatjip };
};
