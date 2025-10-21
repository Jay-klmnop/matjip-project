import { Star } from 'lucide-react';

interface IconProps {
  isLiked: boolean;
  onClick: () => void;
}

export function LikeIcon({ isLiked, onClick }: IconProps) {
  return (
    <button className='cursor-pointer' onClick={onClick} aria-label={isLiked ? 'Unlike' : 'Like'}>
      {isLiked ? (
        <Star size={24} fill='oklch(76.9% 0.188 70.08)' strokeWidth={3} />
      ) : (
        <Star size={24} />
      )}
    </button>
  );
}
