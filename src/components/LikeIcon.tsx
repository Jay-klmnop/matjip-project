import { Star, StarOff } from 'lucide-react';

interface IconProps {
  isLiked: boolean;
  onClick: () => void;
}

export function LikeIcon({ isLiked, onClick }: IconProps) {
  return (
    <button className='cursor-pointer' onClick={onClick}>
      {isLiked ? <StarOff size={20} /> : <Star size={20} />}
    </button>
  );
}
