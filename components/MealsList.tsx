import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native'
import Meal from '../models/meal';
import MealItem from './MealItem';
import { useNavigation } from '@react-navigation/native';

type Props = {
    meals: Array<Meal>,
};

export default function MealsList({ meals }: Props): JSX.Element {
    const navigation = useNavigation<any>();

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
                data={ meals }
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
