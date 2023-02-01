import { StyleSheet, Text, View } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';
import { Colours } from '../assets/styles/Colours';
import Meal from '../models/meal';
import MealsList from '../components/MealsList';

export default function FavouritesScreen(): JSX.Element {
    const favoritesContext = useFavorites();

    const displayedMeals = MEALS.filter((mealItem: Meal) => favoritesContext.favorites.includes(mealItem.id));

    return (
        favoritesContext.favorites.length > 0
            ? <MealsList meals={ displayedMeals } />
            : <View style={ styles.container }><Text style={ styles.text }>No favorite meals...</Text></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colours.raspberry,
    },
});
