import { ReactNode, useReducer } from 'react';
import { ACTIONS, FavoritesContext, favoritesReducer, FavoritesType, initialState } from './FavoritesContext';

type Props = {
    children: ReactNode,
};

export default function FavoritesProvider({ children }: Props): JSX.Element {
    const [state, dispatch] = useReducer(favoritesReducer, initialState);

    const add = (mealId: string): void => {
        dispatch({
            type: ACTIONS.ADD,
            payload: {
                favorites: [...state.favorites, mealId],
            },
        });
    };

    const remove = (mealId: string): void => {
        dispatch({
            type: ACTIONS.REMOVE,
            payload: {
                favorites: state.favorites.filter((id: string) => id !== mealId)
            },
        });
    };

    const context: FavoritesType = {
        favorites: state.favorites,
        add: add,
        remove: remove,
    };

    return (
        <FavoritesContext.Provider value={ context }>{ children }</FavoritesContext.Provider>
    );
}
