import { ReactNode, useState } from 'react';
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';

type Props = {
    children: ReactNode,
};

export default function FavoritesProvider({ children }: Props): JSX.Element {
    const [favorites, setFavorites] = useState<Array<string>>([]);

    const add = (mealId: string): void => {
        setFavorites((currentFavourites: Array<string>) => [...currentFavourites, mealId]);
    };

    const remove = (mealId: string): void => {
        setFavorites((currentFavourites: Array<string>) => currentFavourites.filter((id: string) => id !== mealId));
    };

    const context: FavoritesContextType = {
        favorites: favorites,
        add: add,
        remove: remove,
    };

    return (
        <FavoritesContext.Provider value={ context }>{ children }</FavoritesContext.Provider>
    );
}
