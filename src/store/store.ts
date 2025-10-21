import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MatjipType } from '@/types';

interface LikedType {
  liked: MatjipType[];
  setLiked: (matjips: MatjipType[]) => void;
  addLiked: (matjip: MatjipType) => void;
  removeLiked: (id: string) => void;
}

export const useMatjipStore = create<LikedType>()(
  persist(
    (set, get) => ({
      liked: [],
      setLiked: (matjips) => set({ liked: matjips }),
      addLiked: (matjip) =>
        set({ liked: [...get().liked.filter(Boolean), matjip].filter((m) => !!m && !!m.id) }),
      removeLiked: (id) => set({ liked: get().liked.filter((m) => m && m.id !== id) }),
    }),
    {
      name: 'liked-matjips',
    },
  ),
);
