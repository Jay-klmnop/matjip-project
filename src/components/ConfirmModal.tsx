import type { MouseEvent } from 'react';
import type { MatjipType } from '@/types';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  matjip: MatjipType;
  isLiked: boolean;
}

export function ConfirmModal({ isOpen, onClose, onConfirm, matjip, isLiked }: ConfirmModalProps) {
  if (!matjip) return null;
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='centralize fixed inset-0 z-200' onClick={handleBackdropClick}>
      <div className='modal relative flex w-full max-w-md flex-col justify-evenly gap-4 rounded-lg p-4'>
        <button
          onClick={onClose}
          className='absolute top-1 right-3 text-2xl leading-none font-bold'
        >
          &times;
        </button>
        <div>
          <p className='my-4 ml-2 text-left'>
            {isLiked ? '찜 목록에서 삭제하시겠습니까?' : '찜 목록에 추가하시겠습니까?'}
          </p>
          <div className='flex justify-end gap-4'>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className='button'
            >
              {isLiked ? '삭제' : '추가'}
            </button>
            <button onClick={() => onClose()} className='button'>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
