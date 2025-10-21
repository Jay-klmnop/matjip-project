import { LikeIcon, ConfirmModal } from '@/components';
import type { MatjipType } from '@/types';
import { useState } from 'react';

interface MatjipCardProps {
  matjip: MatjipType;
  isLiked: boolean;
  onToggleLiked: () => void;
}

export function MatjipCard({ matjip, isLiked, onToggleLiked }: MatjipCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLikeClick = () => {
    setIsModalOpen(true);
  };
  const handleConfirm = () => {
    onToggleLiked();
  };

  return (
    <div className='card flex max-w-md min-w-52 flex-col items-center gap-2.5 rounded-md p-4 shadow-md transition-opacity duration-300 ease-in-out'>
      <figure className='relative h-56 w-full overflow-hidden rounded-lg'>
        <div className='like-bg absolute top-0 right-0 z-50 flex items-start justify-end pt-2 pr-2'>
          <LikeIcon isLiked={isLiked} onClick={handleLikeClick} />
        </div>
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
          matjip={matjip}
          isLiked={isLiked}
        />
        <img
          src={`http://localhost:3000/${matjip.image.src}`}
          alt={matjip.image.alt}
          className='absolute inset-0 h-full w-full object-cover object-center'
          loading='lazy'
        />
      </figure>
      <div className='flex w-full flex-col gap-2 text-left'>
        <h3 className='card-heading text-left'>{matjip.title}</h3>
        <p className='sub-text leading-5'>{matjip.description}</p>
      </div>
    </div>
  );
}
