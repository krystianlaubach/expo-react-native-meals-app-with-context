import { useLayoutEffect } from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Meal from '../models/meal';
import MealDetails from '../components/MealDetails';
import { Colours } from '../assets/styles/Colours';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButton from '../components/IconButton';

type Props = {
    route: RouteProp<any>,
    navigation: NativeStackNavigationProp<any>,
};

export default function MealDetailsScreen({ route, navigation }: Props): JSX.Element {
    const meal: Meal = route.params?.meal;
    const mealIngredients: Array<string> = meal.ingredients;
    const preparationSteps: Array<string> = meal.steps;

    const addToFavourites = () => {
        console.log('Meal ' + meal.title + ' added to favourites!');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => <IconButton icon='star' size={24} color={ Colours.white } onPress={ addToFavourites } />
        })
    }, [meal, addToFavourites])

    return (
        <ScrollView style={ styles.container }>
            <Image source={{ uri: meal.imageUrl }} style={ styles.image } />
            <Text style={ styles.title }>{ meal.title }</Text>
            <MealDetails meal={ meal } />
            <Subtitle>Ingredients</Subtitle>
            <List items={ mealIngredients } />
            <Subtitle>Steps</Subtitle>
            <List items={ preparationSteps } />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: Colours.raspberry,
    },
});
