import { createContext, useContext } from 'react';

export type FavoritesType = {
    favorites: Array<string>,
    add: (mealId: string) => void,
    remove: (mealId: string) => void,
};

type PayloadType = {
    favorites: Array<string>,
};

type ActionType = {
    type: string,
    payload: PayloadType,
};

export const initialState: FavoritesType = {
    favorites: [],
    add: (mealId: string) => {},
    remove: (mealId: string) => {},
};

export const ACTIONS = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
};

export function favoritesReducer(state: FavoritesType, action: ActionType): FavoritesType {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.ADD:
            return { ...state, favorites: payload.favorites };
        case ACTIONS.REMOVE:
            return { ...state, favorites: payload.favorites };
        default:
            return state;
    }
}

export const FavoritesContext = createContext<FavoritesType>(initialState);

export function useFavorites(): FavoritesType {
    return useContext(FavoritesContext);
}
