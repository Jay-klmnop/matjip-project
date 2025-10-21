import { Star } from 'lucide-react';

interface IconProps {
  isLiked: boolean;
  onClick: () => void;
}

export function LikeIcon({ isLiked, onClick }: IconProps) {
  return (
    <button
      className='cursor-pointer text-orange-400'
      onClick={onClick}
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      {isLiked ? <Star size={24} fill='#ff8d22' strokeWidth={3} /> : <Star size={24} />}
    </button>
  );
}
