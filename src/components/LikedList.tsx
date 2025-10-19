import { useMatjipStore } from '@/store';
import { MatjipCard } from './MatjipCard';
import { useFetch } from '@/hooks/useFetch';
import type { MatjipType } from '@/types';
import { useEffect } from 'react';

export function LikedList() {
  const {
    data: likedMatjips,
    loading,
    error,
  } = useFetch<{ places: MatjipType[] }>('/users/places');
  const { liked, setLiked, removeLiked } = useMatjipStore();

  useEffect(() => {
    if (likedMatjips?.places) setLiked(likedMatjips.places);
  }, [likedMatjips]);

  const handleRemoveLiked = async (id: string) => {
    await fetch(`/users/places/${id}`, { method: 'DELETE' });
    removeLiked(id);
  };

  if (loading) return <p>로딩 중입니다...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
      {Array.isArray(liked) && liked.length > 0 ? (
        liked.map((matjip) => (
          <MatjipCard
            key={matjip.id}
            matjip={matjip}
            isLiked
            onToggleLiked={() => handleRemoveLiked(matjip.id)}
          />
        ))
      ) : (
        <p>찜한 맛집이 없습니다.</p>
      )}
    </div>
  );
}
