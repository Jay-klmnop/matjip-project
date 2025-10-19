import { create } from 'zustand';
import type { MatjipType } from '@/types';

interface LikedType {
  liked: MatjipType[];
  setLiked: (matjips: MatjipType[]) => void;
  addLiked: (matjip: MatjipType) => void;
  removeLiked: (id: string) => void;
}

export const useMatjipStore = create<LikedType>((set) => ({
  liked: [],
  setLiked: (matjips) => set({ liked: matjips }),
  addLiked: (matjip) => set((state) => ({ liked: [...state.liked, matjip] })),
  removeLiked: (id) => set((state) => ({ liked: state.liked.filter((m) => m.id !== id) })),
}));
