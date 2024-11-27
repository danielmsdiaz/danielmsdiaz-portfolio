import { create } from 'zustand';
import { persist, createJSONStorage  } from 'zustand/middleware';
import { Review } from '@/types/reviews';

interface ReviewStore {
    reviews: Review[];
    addReview: (review: Review) => void;
    addListReviews: (reviews: Review[]) => void;
    removeReview: (id: number) => void;
    updateReview: (id: number, updatedReview: string) => void;
}

export const reviewStore = create(
    persist<ReviewStore>(
        (set) => ({
            reviews: [],

            addReview: (review: Review) =>
                set((state) => ({
                    reviews: [...state.reviews, review],
                })),

            addListReviews: (reviews: Review[]) =>
                set(() => ({
                    reviews: reviews,
                })),

            removeReview: (id: number) =>
                set((state) => ({
                    reviews: state.reviews.filter((item) => item.id !== id),
                })),

            updateReview: (id: number, updatedReview: string) =>
                set((state) => ({
                    reviews: state.reviews.map((item) =>
                        item.id === id ? { ...item, review: updatedReview } : item
                    ),
                })),
        }),
        {
            name: 'review-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
