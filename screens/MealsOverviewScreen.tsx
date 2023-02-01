import { useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import MealsList from '../components/MealsList';

type Props = {
    route: RouteProp<any>,
    navigation: NativeStackNavigationProp<any>,
};

export default function MealsOverviewScreen({ route, navigation }: Props): JSX.Element {
    const categoryId: string = route.params?.categoryId;
    const categoryTitle: string = route.params?.categoryTitle;

    useLayoutEffect(() => {
        navigation.setOptions({ title: categoryTitle });
    }, [categoryTitle]);

    const displayedMeals = MEALS.filter((mealItem: Meal) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    return (
        <MealsList meals={ displayedMeals } />
    );
}
