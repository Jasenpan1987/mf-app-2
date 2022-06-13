import create from "zustand";
export const useStore = create((set) => ({
    movies: [],
    addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));
