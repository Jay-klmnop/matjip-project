import { MatjipCard } from '@/components';
import { useLikedMatjips } from '@/hooks';

export function LikedList() {
  const { liked, removeLikedMatjip, loading, error } = useLikedMatjips();

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
        liked
          .filter((matjip) => !!matjip && matjip.id)
          .map((matjip) => (
            <MatjipCard
              key={matjip.id}
              matjip={matjip}
              isLiked
              onToggleLiked={() => removeLikedMatjip(matjip.id)}
            />
          ))
      ) : (
        <p>찜한 맛집이 없습니다.</p>
      )}
    </div>
  );
}
