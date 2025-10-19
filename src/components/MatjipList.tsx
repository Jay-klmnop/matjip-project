import { useFetch } from '@/hooks';
import { useMatjipStore } from '@/store';
import type { MatjipType } from '@/types';
import { MatjipCard } from '@/components';

export function MatjipList() {
  const { data: matjips, loading, error } = useFetch<MatjipType[]>('/places');
  const { liked, addLiked, removeLiked } = useMatjipStore();

  const handleToggleLiked = async (matjip: MatjipType) => {
    const isLiked = liked.some((l) => l.id === matjip.id);

    if (isLiked) {
      await fetch(`/users/places/${matjip.id}`, { method: 'DELETE' });
      removeLiked(matjip.id);
    } else {
      await fetch(`/users/places`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(matjip),
      });
      addLiked(matjip);
    }
  };

  if (loading) return <p className='message'>로딩 중입니다...</p>;
  3000;
  if (error) {
    if (error.message.includes('404')) {
      return <p>404 error: 요청하신 데이터를 찾을 수 없습니다다</p>;
    }
    return <p className='message'>에러가 발생했습니다! 다시 시도해주세요.</p>;
  }

  return (
    <div className='grid-list'>
      {Array.isArray(matjips) && matjips.length > 0 ? (
        matjips?.map((matjip) => (
          <MatjipCard
            key={matjip.id}
            matjip={matjip}
            isLiked={liked.some((l) => l.id === matjip.id)}
            onToggleLiked={() => handleToggleLiked(matjip)}
          />
        ))
      ) : (
        <p>등록된 맛집이 없습니다.</p>
      )}
    </div>
  );
}
