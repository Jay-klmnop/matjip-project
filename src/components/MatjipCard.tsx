import { LikeIcon } from '@/components';
import type { MatjipType } from '@/types';

interface MatjipCardProps {
  matjip: MatjipType;
  isLiked: boolean;
  onToggleLiked: () => void;
}

export function MatjipCard({ matjip, isLiked, onToggleLiked }: MatjipCardProps) {
  return (
    <div className='card flex min-h-60 max-w-md min-w-80 flex-col items-center gap-2 rounded-lg p-4 shadow-md transition-opacity duration-300 ease-in-out'>
      <figure className='relative h-56 w-full overflow-hidden rounded-lg'>
        <img
          src={`http://localhost:3000/${matjip.image.src}`}
          alt={matjip.image.alt}
          className='absolute inset-0 h-full w-full object-cover object-center'
          loading='lazy'
        />
      </figure>
      <div className='flex w-full flex-col gap-2 text-left'>
        <div className='flex w-full justify-between'>
          <div className='mt-1.5'>
            <h3 className='card-heading w-72 text-left'>{matjip.title}</h3>
          </div>
          <LikeIcon isLiked={isLiked} onClick={onToggleLiked} />
        </div>
        <p>{matjip.description}</p>
      </div>
    </div>
  );
}
