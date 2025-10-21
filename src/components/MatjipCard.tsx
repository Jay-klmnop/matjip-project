import { LikeIcon } from '@/components';
import type { MatjipType } from '@/types';

interface MatjipCardProps {
  matjip: MatjipType;
  isLiked: boolean;
  onToggleLiked: () => void;
}

export function MatjipCard({ matjip, isLiked, onToggleLiked }: MatjipCardProps) {
  return (
    <div className='card flex max-w-md min-w-52 flex-col items-center gap-2 rounded-md p-4 shadow-md transition-opacity duration-300 ease-in-out'>
      <figure className='relative h-56 w-full overflow-hidden rounded-lg'>
        <div className='like-bg absolute top-0 right-0 z-50 flex items-start justify-end pt-2 pr-2'>
          <LikeIcon isLiked={isLiked} onClick={onToggleLiked} />
        </div>
        <img
          src={`http://localhost:3000/${matjip.image.src}`}
          alt={matjip.image.alt}
          className='absolute inset-0 h-full w-full object-cover object-center'
          loading='lazy'
        />
      </figure>
      <div className='flex w-full flex-col gap-2 text-left'>
        <h3 className='card-heading text-left'>{matjip.title}</h3>
        <p className='leading-5'>{matjip.description}</p>
      </div>
    </div>
  );
}
