import { useMatjipStore } from '@/store';
import { MatjipCard } from '@/components';
import { useFetch } from '@/hooks';
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

  if (loading) return <p className='message'>로딩 중입니다...</p>;
  if (error) {
    if (error.message.includes('404')) {
      return <p>404 error: 요청하신 데이터를 찾을 수 없습니다다</p>;
    }
    return <p className='message'>에러 발생: {error.message}</p>;
  }

  return (
    <div className='grid-list'>
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
