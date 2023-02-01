import { createContext, useContext } from 'react';

export type FavoritesContextType = {
    favorites: Array<string>,
    add: (mealId: string) => void,
    remove: (mealId: string) => void,
};

const defaultContext: FavoritesContextType = {
    favorites: [],
    add: (mealId: string) => {},
    remove: (mealId: string) => {},
};

export const FavoritesContext = createContext<FavoritesContextType>(defaultContext);

export function useFavorites(): FavoritesContextType {
    return useContext(FavoritesContext);
}
