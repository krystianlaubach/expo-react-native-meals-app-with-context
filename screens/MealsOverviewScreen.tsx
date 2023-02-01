import { useLayoutEffect } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

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

    const keyExtractor = (meal: Meal): string => {
        return meal.id;
    };

    const renderItem = (itemData: ListRenderItemInfo<Meal>): JSX.Element => {
        const meal: Meal = itemData.item;

        const pressHandler = () => {
            navigation.navigate('MealDetails', {
                meal: meal,
            });
        };

        return (
            <MealItem meal={ meal } onPress={ pressHandler } />
        );
    };

    return (
        <View style={ styles.container }>
            <FlatList
                data={ displayedMeals }
                keyExtractor={ keyExtractor }
                renderItem={ renderItem }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
